import { getRouterManifest } from "@tanstack/start/router-manifest"
import {
   createStartHandler,
   defaultStreamHandler,
} from "@tanstack/start/server"
import type { EventHandlerRequest, H3Event } from "vinxi/http"
import { createRouter } from "../app/router"

const startHandler = createStartHandler({
   createRouter,
   getRouterManifest,
})(defaultStreamHandler)

export async function onRequest(context: {
   request: H3Event<EventHandlerRequest>
}) {
   const response = await startHandler(context.request)
   return response
}
