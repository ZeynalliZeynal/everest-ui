import { defineConfig } from "tsup";
import Tsup from "@everest-ui/build-config/tsup";

export default defineConfig({
  ...Tsup,
  target: "esnext",
  splitting: true,
});
