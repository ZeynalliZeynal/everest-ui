import { execa } from "execa";
import fs from "fs-extra";
import chalk from "chalk";
import path from "path";

export async function add(component: string): Promise<void> {
  const packageName = `@everest-ui/react-${component}`;
  const componentPath = path.join("src", "components", `${component}.ts`);

  try {
    console.log(chalk.blue(`Installing ${packageName}...`));
    await execa("npm", ["install", packageName]);

    console.log(chalk.green(`Adding ${component} component...`));
    await fs.ensureDir(path.dirname(componentPath)); // Ensure the directory exists
    await fs.writeFile(
      componentPath,
      `export { default } from '${packageName}';`,
      "utf8",
    );

    console.log(
      chalk.greenBright(
        `${component} component has been added successfully! 🎉`,
      ),
    );
  } catch (error) {
    console.error(
      chalk.red(`Failed to add the ${component} component:`),
      (error as Error).message,
    );
  }
}
