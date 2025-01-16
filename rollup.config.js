import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const preserveUseClient = () => ({
  name: "preserve-use-client",
  renderChunk(code) {
    if (code.includes('"use client"') || code.includes("'use client'")) {
      return {
        code: `"use client";\n` + code,
        map: null,
      };
    }
    return null;
  },
});

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom", "framer-motion"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist",
        exclude: ["**/*.css"],
      }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        extract: "styles.css",
      }),
      terser(),
      preserveUseClient(), // Ensure "use client" is retained
    ],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
