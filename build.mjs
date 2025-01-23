import path from "node:path";
import { globSync } from "glob";
import * as esbuild from "esbuild";
import * as tsup from "tsup";
import { execa } from "execa";
import fs from "fs";

async function build(relativePath) {
  const tasks = [];
  const pkg = relativePath.split(path.sep).slice(2)[0];
  const files = ["index.ts"];
  if (pkg === "everest-ui") {
    files.push("internal.ts");
  }

  // Use POSIX paths for consistency across tools
  const entryPoints = files
    .map((file) => path.join(relativePath, "src", file).replace(/\\/g, "/"))
    .filter((filePath) => fs.existsSync(filePath));

  if (entryPoints.length === 0) {
    console.log(`No entry points found for ${relativePath}`);
    return;
  }

  const dist = path.join(relativePath, "dist").replace(/\\/g, "/");

  const esbuildConfig = {
    entryPoints,
    external: ["@everest-ui/*"],
    packages: "external",
    bundle: true,
    sourcemap: true,
    format: "cjs",
    target: "es2022",
    outdir: dist,
  };

  console.log(`Building ${relativePath}...`);

  tasks.push(
    esbuild
      .build(esbuildConfig)
      .then(() => console.log(`CJS: Built ${relativePath}`))
  );
  tasks.push(
    esbuild
      .build({
        ...esbuildConfig,
        format: "esm",
        outExtension: { ".js": ".mjs" },
      })
      .then(() => console.log(`ESM: Built ${relativePath}`))
  );

  tasks.push(
    tsup
      .build({
        entry: entryPoints,
        format: ["cjs", "esm"],
        dts: { only: true },
        outDir: dist,
        silent: false,
        external: [/@everest-ui\/.+/],
      })
      .then(() => console.log(`TSC: Built ${relativePath}`))
  );

  await Promise.all(tasks);
}

globSync("packages/*/*").forEach((path) => build(path.replace(/\\/g, "/")));

function done() {}
