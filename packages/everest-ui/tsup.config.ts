import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/cli/init.ts", "src/cli/add.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: "dist",
});
