import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/hello")({
   component: () => <div>Hello /hello!</div>,
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
})
