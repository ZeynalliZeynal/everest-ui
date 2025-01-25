import fs from "fs-extra";
import path from "path";
import prompts, { PromptObject } from "prompts";
import chalk from "chalk";

export async function initProject() {
  const questions: PromptObject[] = [
    {
      type: "confirm",
      name: "addCssVariables",
      message: "Add CSS Variables?",
      initial: true,
    },
    {
      type: "confirm",
      name: "updateTailwindConfig",
      message: "Update tailwind.config.[ts|js]?",
      initial: true,
    },
  ];

  const response = await prompts(questions);

  if (response.addCssVariables) {
    await addCssVariables();
  }

  if (response.updateTailwindConfig) {
    await updateTailwindConfig();
  }

  console.log(chalk.green("Everest UI has been initialized in your project!"));
}

async function addCssVariables() {
  const cssVariables = `
:root {
  --everest-primary: #3b82f6;
  --everest-secondary: #10b981;
  --everest-accent: #8b5cf6;
  --everest-background: #ffffff;
  --everest-foreground: #000000;
}
`;

  // For Next.js App router
  const globalsPath = path.join(process.cwd(), "app", "global.css");

  if (await fs.pathExists(globalsPath)) {
    const content = await fs.readFile(globalsPath, "utf-8");
    if (!content.includes(":root")) {
      const updatedContent = cssVariables + content;
      await fs.writeFile(globalsPath, updatedContent);
      console.log(chalk.blue("CSS variables added to global.css"));
    } else {
      console.log(
        chalk.yellow("CSS variables already exist in global.css. Skipping...")
      );
    }
  } else {
    console.log(chalk.yellow("global.css not found. Creating a new file..."));
    await fs.writeFile(globalsPath, cssVariables);
    console.log(chalk.blue("CSS variables added to a new global.css file"));
  }
}

async function updateTailwindConfig() {
  const configPath = await findTailwindConfig();

  if (!configPath) {
    console.log(chalk.red("tailwind.config.[ts|js] not found"));
    return;
  }

  const content = await fs.readFile(configPath, "utf-8");
  if (content.includes("primary: 'var(--everest-primary)'")) {
    console.log(
      chalk.yellow(
        "Tailwind config already includes Everest UI variables. Skipping..."
      )
    );
    return;
  }

  const updatedContent = content.replace(
    /theme:\s*{/,
    `theme: {
    extend: {
      colors: {
        primary: 'var(--everest-primary)',
        secondary: 'var(--everest-secondary)',
        accent: 'var(--everest-accent)',
        background: 'var(--everest-background)',
        foreground: 'var(--everest-foreground)',
      },
    },`
  );

  await fs.writeFile(configPath, updatedContent);
  console.log(chalk.blue(`Updated ${path.basename(configPath)}`));
}

async function findTailwindConfig() {
  const possibleConfigs = ["tailwind.config.js", "tailwind.config.ts"];
  for (const config of possibleConfigs) {
    const configPath = path.join(process.cwd(), config);
    if (await fs.pathExists(configPath)) {
      return configPath;
    }
  }
  return null;
}
