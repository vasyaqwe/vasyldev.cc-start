import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import { seo } from "@/lib/seo"
import { cn } from "@/lib/utils"
import appCss from "@/styles/app.css?url"
import {
   ArrowRightCircleIcon,
   MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline"
import { createRootRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import { Outlet, ScrollRestoration } from "@tanstack/react-router"
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start"
import type * as React from "react"

export const Route = createRootRoute({
   meta: ({ match }) => {
      return [
         {
            charSet: "utf-8",
         },
         {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
         },
         ...seo({
            title: !match.globalNotFound ? "Vasyl Polishchuk" : "Not found",
            description: !match.globalNotFound
               ? "Hi — I'm Vasyl, full-stack developer based in Ukraine."
               : "This page does not exist — it may have been moved or deleted.",
         }),
      ]
   },
   links: () => [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
         rel: "preconnect",
         href: "https://fonts.gstatic.com",
      },
      {
         rel: "stylesheet",
         href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400..700&display=swap",
      },
   ],
   notFoundComponent: () => (
      <div className="grid h-screen place-items-center text-center">
         <div className="-mt-36 ">
            <div className="relative mb-6">
               <Card className="absolute inset-0 mx-auto grid h-28 w-[5.5rem] rotate-6 place-content-center rounded-xl" />
               <Card className="-rotate-6 mx-auto grid h-28 w-[5.5rem] place-content-center rounded-xl">
                  <MagnifyingGlassCircleIcon className="size-9" />
               </Card>
            </div>
            <h1 className="mb-1 font-semibold text-xl">Not found</h1>
            <p className="mb-5 text-lg leading-snug opacity-70">
               This page does not exist — <br /> it may have been moved or
               deleted.
            </p>
            <Link
               to={"/"}
               className={buttonVariants()}
            >
               Back home
            </Link>
         </div>
      </div>
   ),
   component: RootComponent,
})

function RootComponent() {
   return (
      <RootDocument>
         <Outlet />
      </RootDocument>
   )
}

function RootDocument({ children }: { children: React.ReactNode }) {
   return (
      <Html>
         <Head>
            <Meta />
         </Head>
         <Body>
            <div className="pt-5 font-primary text-sm leading-5 antialiased">
               <header className="container flex items-center justify-between pb-4">
                  <Link to={"/"}>
                     <Icons.logo className="size-[24px] opacity-65" />
                  </Link>
                  <nav>
                     <ul className="flex items-center gap-3">
                        <li>
                           <a
                              className="text-muted-foreground underline hover:text-foreground"
                              href="https://www.upwork.com/freelancers/~015c1b113a62e11b13"
                              target="_blank"
                              rel="noreferrer"
                           >
                              upwork
                           </a>
                        </li>
                        <li>
                           <a
                              className="text-muted-foreground underline hover:text-foreground"
                              href="https://github.com/vasyaqwe"
                              target="_blank"
                              rel="noreferrer"
                           >
                              github
                           </a>
                        </li>

                        <li>
                           <a
                              className="text-muted-foreground underline hover:text-foreground"
                              href="https://www.linkedin.com/in/vasyl-polishchuk-37329624b"
                              target="_blank"
                              rel="noreferrer"
                           >
                              linkedin
                           </a>
                        </li>
                        <li>
                           <a
                              className={cn(
                                 buttonVariants({
                                    variant: "outline",
                                    size: "sm",
                                 }),
                                 "text-muted-foreground ",
                              )}
                              target="_blank"
                              href="https://cal.com/vasyldev/15min"
                              rel="noreferrer"
                           >
                              <span className="-mt-0.5"> contact me</span>
                              <ArrowRightCircleIcon className="mt-0.5 size-[18px]" />
                           </a>
                        </li>
                     </ul>
                  </nav>
               </header>
               <main className="container">{children}</main>
               <footer className="mt-20 border-t border-t-border/60 bg-muted py-5 text-muted-foreground text-xs shadow-sm md:mt-28">
                  <div className="container flex items-center justify-between">
                     <p> © {new Date().getFullYear()} Vasyl Polishchuk</p>
                     <a
                        target="_blank"
                        href="https://github.com/vasyaqwe/vasyldev.cc"
                        className="underline hover:text-foreground"
                        rel="noreferrer"
                     >
                        view source code
                     </a>
                  </div>
               </footer>
            </div>
            <ScrollRestoration />
            <Scripts />
         </Body>
      </Html>
   )
}
