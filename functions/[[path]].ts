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

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function onRequest(context: { request: any }) {
   const response = await startHandler(context.request)

   return response
}
