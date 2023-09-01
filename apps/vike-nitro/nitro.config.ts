import { createServer } from "vite";
import { defineEventHandler, defineLazyEventHandler, fromNodeMiddleware } from "h3";

//https://nitro.unjs.io/config
export default defineNitroConfig({
    srcDir: 'server/',
    buildDir: 'server/.nitro',
    devHandlers: [
        {
            route: '/__vite',
            handler: defineLazyEventHandler(async () => {
                const viteDevServer = await createServer({
                    base: '/__vite/',
                    appType: 'custom',
                    server: { middlewareMode: true },
                })

                return defineEventHandler(fromNodeMiddleware(viteDevServer.middlewares))
            })
        }
    ]
});
