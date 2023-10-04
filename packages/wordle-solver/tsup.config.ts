import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts", "lib/probability.ts", "lib/past.ts"],
});
