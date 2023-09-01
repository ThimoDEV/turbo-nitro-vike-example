import { renderPage } from "vite-plugin-ssr/server";

export default defineEventHandler(async (event) => {
  const pageContextInit = {
    urlOriginal: getRequestURL(event).toString(),
  };
  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse as Response;
  sendWebResponse(event, response);
});
