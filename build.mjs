import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "url";
import { globSync } from "glob";
import * as esbuild from "esbuild";
import * as tsup from "tsup";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function build(relativePath) {
  const tasks = [];
  const pkg = relativePath.split(path.sep).slice(-1)[0];
  const srcDir = path.join(relativePath, "src");

  // Check if src directory exists
  if (!fs.existsSync(srcDir)) {
    console.warn(`Skipping ${relativePath}: 'src' directory not found.`);
    return;
  }

  const entryPoint = path.join(srcDir, "index.ts");

  // Check if entry point file exists
  if (!fs.existsSync(entryPoint)) {
    console.warn(`Skipping ${relativePath}: 'src/index.ts' not found.`);
    return;
  }

  const dist = path.join(relativePath, "dist");

  const esbuildConfig = {
    entryPoints: [entryPoint],
    external: ["react", "react-dom", "framer-motion"],
    packages: "external",
    bundle: true,
    sourcemap: true,
    target: "es2018",
    outdir: dist,
  };

  // Build CJS
  tasks.push(
    esbuild
      .build({
        ...esbuildConfig,
        format: "cjs",
        outExtension: { ".js": ".cjs" },
      })
      .then(() => console.log(`CJS: Built ${relativePath}`))
      .catch((error) =>
        console.error(`CJS: Error building ${relativePath}:`, error),
      ),
  );

  // Build ESM
  tasks.push(
    esbuild
      .build({
        ...esbuildConfig,
        format: "esm",
        outExtension: { ".js": ".mjs" },
      })
      .then(() => console.log(`ESM: Built ${relativePath}`))
      .catch((error) =>
        console.error(`ESM: Error building ${relativePath}:`, error),
      ),
  );

  // Generate TypeScript declaration files
  tasks.push(
    tsup
      .build({
        entry: [entryPoint],
        format: ["cjs", "esm"],
        dts: { only: true },
        outDir: dist,
        silent: true,
        external: ["react", "react-dom", "framer-motion"],
      })
      .then(() => console.log(`TSC: Built ${relativePath}`))
      .catch((error) =>
        console.error(`TSC: Error building ${relativePath}:`, error),
      ),
  );

  await Promise.all(tasks);
}

// Build React components
globSync("packages/react/*").forEach(build);

// Build Core utilities
globSync("packages/core/*").forEach(build);

console.log("Build complete!");
