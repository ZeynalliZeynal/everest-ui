import { defineConfig } from "tsup";
import glob from "fast-glob";
import path from "path";

const files = glob.sync("src/**/index.tsx");

const entry = files.reduce((acc, file) => {
  const folder = path.relative("src", path.dirname(file));

  acc[`${folder}/index`] = file;

  return acc;
}, {});

export default defineConfig({
  entry,
  format: ["cjs", "esm"],
  outDir: "dist",
  dts: true,
  minify: true,
  clean: true,
  splitting: false,
});
