import { Command } from "commander";
import chalk from "chalk";
import { init } from "./commands/init";
import { add } from "./commands/add";

const program = new Command();

console.log(
  chalk.cyanBright.bold(
    "🌄 Everest UI CLI - Simplify Your Development Workflow",
  ),
);

program
  .name("everest-ui")
  .description(
    "A CLI tool for initializing and managing Everest UI components.",
  )
  .version("1.0.0");

program
  .command("init")
  .description("Initialize Everest UI in your project")
  .action(init);

program
  .command("add <component>")
  .description("Add a specific component to your project")
  .action(add);

program.parse(process.argv);
