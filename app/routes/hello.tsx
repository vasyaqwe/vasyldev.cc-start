import { createFileRoute } from "@tanstack/react-router"

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const Route = createFileRoute("/hello")({
   loader: async () => {
      await wait(2000)

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
   const data = Route.useLoaderData()
   return <div>Hello {data}!</div>
}
