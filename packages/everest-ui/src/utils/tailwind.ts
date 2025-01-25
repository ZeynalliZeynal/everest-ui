import fs from "fs-extra";
import chalk from "chalk";

export async function updateTailwindConfig(): Promise<void> {
  try {
    const configPath = "./tailwind.config.js";

    // Check if the Tailwind config file exists
    if (!(await fs.pathExists(configPath))) {
      console.error(
        chalk.red(`TailwindCSS configuration file not found at ${configPath}.`),
      );
      return;
    }

    const config = await fs.readFile(configPath, "utf8");

    const updatedConfig = config.replace(
      "content: [",
      "content: ['./node_modules/@everest-ui/**/*.{js,ts,jsx,tsx}',",
    );

    await fs.writeFile(configPath, updatedConfig, "utf8");
    console.log(chalk.green("TailwindCSS configuration updated successfully!"));
  } catch (error) {
    console.error(
      chalk.red("Failed to update TailwindCSS configuration:"),
      (error as Error).message,
    );
  }
}
