import { createServerFn, json } from "@tanstack/start"

export const getServerTime = createServerFn("GET", (_) => {
   return json(null, {
      headers: {
         "Set-Cookie": `hey=abc12345; Path=/; HttpOnly; Secure; Max-Age=${60 * 60 * 24}; SameSite=Strict`,
      },
   })
})
