import { renderPage } from 'vite-plugin-ssr/server'

export default defineEventHandler((event) => {
  const pageContextInit = {
    urlOriginal: getRequestURL(event),
  };


});
