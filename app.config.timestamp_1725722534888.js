// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";
var app_config_default = defineConfig({
  vite: {
    plugins: () => [
      tsConfigPaths({
        projects: ["./tsconfig.json"]
      })
    ]
  }
  // deployment: {
  //    preset: "bun",
  // },
});
export {
  app_config_default as default
};
