import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import path from "path";
import fs from "fs";

const packagesDir = path.join(process.cwd(), "packages/react");

const createConfig = (componentName) => {
  const componentDir = path.join(packagesDir, componentName);
  const packagePath = path.join(componentDir, "package.json");

  if (!fs.existsSync(packagePath)) {
    console.warn(
      `Skipping ${componentName} as it does not contain a package.json.`
    );
    return [];
  }

  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf-8"));
  const inputFile = path.join(componentDir, "src", "index.ts");

  return [
    {
      input: inputFile,
      output: [
        {
          file: path.join(componentDir, packageJson.main),
          format: "cjs",
          sourcemap: true,
          banner: '"use client";\n',
        },
        {
          file: path.join(componentDir, packageJson.module),
          format: "esm",
          sourcemap: true,
          banner: '"use client";\n',
        },
      ],
      plugins: [
        resolve(),
        commonjs(),
        typescript({
          tsconfig: "./tsconfig.json",
          declaration: true,
          declarationDir: path.join(componentDir, "dist"),
        }),
        postcss(),
        terser({
          format: {
            preamble: '"use client";',
          },
        }),
      ],
      external: ["react", "react-dom", "framer-motion"],
    },
    {
      input: path.join(componentDir, "dist", "index.d.ts"),
      output: [
        {
          file: path.join(componentDir, packageJson.types),
          format: "esm",
        },
      ],
      plugins: [dts()],
      external: [/\\.css$/],
    },
  ];
};

const components = fs
  .readdirSync(packagesDir)
  .filter((file) => fs.statSync(path.join(packagesDir, file)).isDirectory());

export default components.flatMap(createConfig).filter(Boolean);
