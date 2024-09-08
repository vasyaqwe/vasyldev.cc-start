import { Icons } from "@/components/ui/icons"
import { Link } from "@tanstack/react-router"
import { createFileRoute } from "@tanstack/react-router"

// const filePath = "count.txt"

// async function readCount() {
//    return Number.parseInt(
//       await fs.promises.readFile(filePath, "utf-8")ignore.catch(() => "0"),
//    )
// }

// const _getCount = createServerFn("GET", async () => {
//    const data = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1",
//    ).then((response) => response.json())

//    return data
// })

// const _updateCount = createServerFn("POST", async (addBy: number) => {
//    const count = await readCount()
//    await fs.promises.writeFile(filePath, `${count + addBy}`)
// })

export const Route = createFileRoute("/")({
   component: Component,
   // loader: async () => await getCount(),
})

const _tools = [
   {
      name: "vite",
      href: "https://vite.dev",
      logo: <Icons.vite className="size-[25px]" />,
   },
   {
      name: "react",
      href: "https://react.dev",
      logo: <Icons.react className="size-[25px]" />,
   },
   {
      name: "hono",
      href: "https://hono.dev",
      logo: <Icons.hono className="size-[24px]" />,
   },
   {
      name: "resend",
      href: "https://resend.com",
      logo: <Icons.resend className="size-[20px]" />,
   },
   {
      name: "tanstack",
      href: "https://tanstack.com",
      logo: (
         <img
            width={25}
            height={25}
            src={"/tanstack.png"}
            alt="Tanstack"
         />
      ),
   },
   {
      name: "trpc",
      href: "https://trpc.io",
      logo: <Icons.trpc className="size-[24px]" />,
   },
   {
      name: "turborepo",
      href: "https://turbo.build/repo",
      logo: <Icons.turborepo className="size-[22px]" />,
   },
   {
      name: "supabase",
      href: "https://supabase.com",
      logo: <Icons.supabase className="size-[25px]" />,
   },
   {
      name: "typescript",
      href: "https://www.typescriptlang.org",
      logo: <Icons.typescript className="size-[22px]" />,
   },
   {
      name: "bun",
      href: "https://bun.sh",
      logo: <Icons.bun className="size-[27px]" />,
   },
   {
      name: "tailwindcss",
      href: "https://tailwindcss.com",
      logo: <Icons.tailwindcss className="size-[28px]" />,
   },
   {
      name: "upstash",
      href: "https://upstash.com",
      logo: <Icons.upstash className="size-[23px]" />,
   },
   {
      name: "drizzle-orm",
      href: "https://orm.drizzle.team",
      logo: <Icons.drizzle className="size-[31px]" />,
   },
   {
      name: "next.js",
      href: "https://nextjs.org",
      logo: <Icons.nextjs className="size-[27px]" />,
   },
]

function Component() {
   return (
      <>
         <h1>hello home</h1>
         <Link to="/hello">hello</Link>
         <Link to="/hello2">hello2</Link>
      </>
   )
}
