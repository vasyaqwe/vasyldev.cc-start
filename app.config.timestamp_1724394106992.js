// app.config.ts
import path from "node:path";
import { defineConfig } from "@tanstack/start/config";
var app_config_default = defineConfig({
  deployment: {
    preset: "cloudflare-pages"
  },
  tsr: {
    appDirectory: path.resolve(__dirname, "app"),
    routesDirectory: path.resolve(__dirname, "app/routes"),
    generatedRouteTree: path.resolve(__dirname, "app/routeTree.gen.ts"),
    routeFilePrefix: "",
    routeFileIgnorePrefix: "_",
    enableRouteGeneration: true
  }
});
export {
  app_config_default as default
};
