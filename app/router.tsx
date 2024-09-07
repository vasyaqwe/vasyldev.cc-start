import { createRouter as createTanStackRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"

export function createRouter() {
   const router = createTanStackRouter({
      routeTree,
      defaultPreload: "intent",
      defaultPendingMs: 100,
      defaultPendingMinMs: 200,
   })

   return router
}

declare module "@tanstack/react-router" {
   interface Register {
      router: ReturnType<typeof createRouter>
   }
}
