import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "@tanstack/start/config"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
   tsr: {
      appDirectory: path.resolve(__dirname, "app"),
      routesDirectory: path.resolve(__dirname, "app/routes"),
      generatedRouteTree: path.resolve(__dirname, "app/routeTree.gen.ts"),
      routeFilePrefix: "",
      routeFileIgnorePrefix: "_",
      enableRouteGeneration: true,
   },
})
