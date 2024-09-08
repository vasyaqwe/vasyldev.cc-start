import { getServerTime } from "@/lib/functions"
import { createFileRoute } from "@tanstack/react-router"

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const Route = createFileRoute("/hello")({
   loader: async () => {
      await wait(2000)
      getServerTime()
      return "OK"
   },
   component: Component,
   meta: () => {
      return [
         {
            title: "Hello /hello!",
         },
         { name: "description", content: "Hello /hello!" },
         { name: "robots", content: "index, follow" },
         { name: "googlebot", content: "index, follow" },
      ]
   },
   pendingComponent: () => <div>Loading...</div>,
})

function Component() {
   return <div>Hello hello!</div>
}
