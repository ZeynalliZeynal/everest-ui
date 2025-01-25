import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  target: "node18",
  sourcemap: true,
  splitting: false,
  dts: true,
  clean: true,
  outDir: "dist",
  banner: {
    js: "#!/usr/bin/env node",
  },
});
