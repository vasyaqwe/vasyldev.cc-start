import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/hello2/")({
   component: () => <div>Hello /hello2/!</div>,
   loader: async () => {
      return "OK"
   },
})
