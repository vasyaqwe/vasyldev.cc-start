import { getRouterManifest } from "@tanstack/start/router-manifest"
import {
   createStartHandler,
   defaultStreamHandler,
} from "@tanstack/start/server"
import { createRouter } from "../app/router"

const startHandler = createStartHandler({
   createRouter,
   getRouterManifest,
})(defaultStreamHandler)

export async function onRequest(context) {
   // Adapt the context to match what TanStack Start expects
   const adaptedContext = {
      request: context.request,
      // Add any other necessary context properties
   }

   // Call the TanStack Start handler
   const response = await startHandler(adaptedContext)

   // Return the response
   return response
}
