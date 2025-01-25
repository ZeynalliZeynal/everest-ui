#!/usr/bin/env node
import { program } from "commander";
import { initProject } from "../src/cli/init";
import { addComponent } from "../src/cli/add";

program.name("everest").description("CLI for Everest UI").version("1.0.0");

program
  .command("init")
  .description("Initialize Everest UI in your project")
  .action(initProject);

program
  .command("add <component>")
  .description("Add a component to your project")
  .action(addComponent);

program.parse(process.argv);
