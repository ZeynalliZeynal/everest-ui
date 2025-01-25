import prompts from "prompts";
import chalk from "chalk";
import fs from "fs-extra";
import { updateTailwindConfig } from "../utils/tailwind";

export async function init(): Promise<void> {
  console.log(chalk.blueBright("Welcome to Everest UI initialization!"));

  // Ask configuration questions using prompts
  const responses = await prompts([
    {
      type: "confirm",
      name: "addCssVariables",
      message: "Do you want to add CSS variables for Everest UI?",
      initial: true,
    },
    {
      type: "confirm",
      name: "updateTailwind",
      message: "Do you want to update your TailwindCSS configuration?",
      initial: true,
    },
  ]);

  // Add CSS variables if selected
  if (responses.addCssVariables) {
    console.log(chalk.green("Adding CSS variables..."));

    const cssVariablesPath = "./src/styles/variables.css";
    const cssVariablesContent = `
      :root {
        --everest-primary: #4a90e2;
        --everest-secondary: #50e3c2;
      }
    `;

    await fs.ensureFile(cssVariablesPath);
    await fs.writeFile(cssVariablesPath, cssVariablesContent, "utf8");

    console.log(chalk.greenBright("CSS variables added successfully!"));
  }

  // Update Tailwind configuration if selected
  if (responses.updateTailwind) {
    console.log(chalk.green("Updating TailwindCSS configuration..."));
    await updateTailwindConfig();
    console.log(chalk.greenBright("TailwindCSS configuration updated!"));
  }

  console.log(
    chalk.yellowBright("Everest UI has been initialized successfully! 🚀"),
  );
}
