import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";

const useClientDirectivePlugin = () => {
  return {
    name: "use-client-directive-plugin",
    renderChunk(code) {
      return `'use client';${code}`;
    },
  };
};

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
      minimize: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
    postcss({
      modules: true,
      extract: false,
      minimize: true,
    }),
    useClientDirectivePlugin(),
  ],
};
