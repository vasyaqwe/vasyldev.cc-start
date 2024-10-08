import { defineConfig } from "@tanstack/start/config"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
   vite: {
      plugins: () => [tsConfigPaths()],
   },
   deployment: {
      preset: "bun",
   },
})
