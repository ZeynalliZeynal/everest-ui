import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../packages/core/**/*.stories.tsx",
    "../packages/react/**/*.stories.tsx",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-storysource"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {
      builder: {},
      // enable React strict mode
      strictMode: true,
    },
  },
  swc: (config: { jsc: { transform: any } }) => ({
    ...config,
    jsc: {
      ...config?.jsc,
      transform: {
        ...config?.jsc?.transform,
        react: {
          // Do not require importing React into scope to use JSX
          runtime: "automatic",
        },
      },
    },
  }),

  // we need to add aliases to webpack so it knows how to follow
  // to the source of the packages rather than the built version (dist)
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        ...convertTsConfigPathsToWebpackAliases(),
      },
    },
  }),
};

export default config;

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return path.dirname(require.resolve(path.join(value, "package.json")));
}

function convertTsConfigPathsToWebpackAliases() {
  const rootDir = path.resolve(__dirname, "../");
  const tsconfig = require("../tsconfig.json");

  // Ensure paths is defined in tsconfig
  const tsconfigPaths: [string, string[]][] = Object.entries(
    tsconfig.compilerOptions.paths,
  );

  // Define aliases with a string index signature
  return tsconfigPaths.reduce<{ [key: string]: string }>(
    (aliases, [realPath, mappedPath]) => {
      aliases[realPath] = path.join(rootDir, mappedPath[0]);
      return aliases;
    },
    {},
  );
}
