import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const createConfig = (input, output) => ({
  input,
  output: [
    {
      file: `dist/${output}.mjs`,
      format: "esm",
      sourcemap: true,
      banner: '"use client";\n',
    },
    {
      file: `dist/${output}.js`,
      format: "cjs",
      sourcemap: true,
      banner: '"use client";\n',
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
    terser({
      format: {
        preamble: '"use client";',
      },
    }),
  ],
});

export default [
  createConfig("src/index.ts", "index"),
  {
    input: "dist/index.d.ts",
    output: [
      { file: "dist/index.d.ts", format: "cjs" },
      { file: "dist/index.d.mts", format: "esm" },
    ],
    plugins: [dts()],
    external: [/\.css$/],
  },
];
