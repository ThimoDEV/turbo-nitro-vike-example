import { createServer } from "vite";
import {
  defineEventHandler,
  defineLazyEventHandler,
  fromNodeMiddleware,
} from "h3";
import { root } from "./server/root";

//https://nitro.unjs.io/config
export default defineNitroConfig({
  typescript: { internalPaths: true },
  esbuild: {
    options: {
      loaders: {
        ".tsx": "tsx",
      },
    },
  },
  srcDir: "server/",
  buildDir: "server/.nitro",
  devHandlers: [
    {
      route: "/__vite",
      handler: defineLazyEventHandler(async () => {
        const viteDevServer = await createServer({
          root,
          server: { middlewareMode: true },
        });

        return defineEventHandler(
          fromNodeMiddleware(viteDevServer.middlewares),
        );
      }),
    },
  ],
});
