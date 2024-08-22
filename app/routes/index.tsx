import * as fs from "node:fs"
import { createFileRoute, useRouter } from "@tanstack/react-router"
import { createServerFn } from "@tanstack/start"

const filePath = "count.txt"

async function readCount() {
   return Number.parseInt(
      await fs.promises.readFile(filePath, "utf-8").catch(() => "0"),
   )
}

const getCount = createServerFn("GET", async () => {
   const data = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
   ).then((response) => response.json())

   return data
})

const updateCount = createServerFn("POST", async (addBy: number) => {
   const count = await readCount()
   await fs.promises.writeFile(filePath, `${count + addBy}`)
})

export const Route = createFileRoute("/")({
   component: Home,
   loader: async () => await getCount(),
})

function Home() {
   const router = useRouter()
   const state = Route.useLoaderData()

   return <div>Add 1 to JSON.stringify(state)</div>
}
