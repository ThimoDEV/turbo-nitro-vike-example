import { renderPage } from "vite-plugin-ssr/server";
import { tuplesToObject } from "../utils/tuplesToObject";

export default defineEventHandler(async (event) => {
  const pageContextInit = {
    urlOriginal: getRequestURL(event).toString(),
  };
  const pageContext = await renderPage(pageContextInit);
  const { body, statusCode, headers } = pageContext.httpResponse;
  
  if (headers) {
    const nitroHeaders = tuplesToObject(headers);
    setResponseHeaders(event, nitroHeaders);
  }
  if (statusCode) {
    setResponseStatus(event, statusCode);
  }

  send(event, body);
});
