import fs from "fs-extra";
import path from "path";
import chalk from "chalk";

export async function addComponent(componentName: string) {
  const componentPath = path.join(
    __dirname,
    "..",
    "..",
    "components",
    `${componentName}.tsx`
  );
  const destinationPath = path.join(
    process.cwd(),
    "components",
    `${componentName}.tsx`
  );

  if (await fs.pathExists(componentPath)) {
    await fs.copy(componentPath, destinationPath);
    console.log(
      chalk.green(`Added ${componentName} component to your project`)
    );
  } else {
    console.log(
      chalk.red(
        `Component ${componentName} not found in the Everest UI library`
      )
    );
  }
}
