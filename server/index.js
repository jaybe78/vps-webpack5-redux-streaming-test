import express from "express";
import { createPageRenderer } from "vite-plugin-ssr";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";
const isProduction = process.env.NODE_ENV === "production";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = `${__dirname}/..`;

startServer();

async function startServer() {
  const app = express();

  let viteDevServer;
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`));
  } else {
    const require = createRequire(import.meta.url);
    const vite = require("vite");
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: "ssr" },
    });
    app.use(viteDevServer.middlewares);
  }

  const renderPage = createPageRenderer({ viteDevServer, isProduction, root });
  app.get("*", async (req, res, next) => {
    const url = req.originalUrl;
    const pageContextInit = { url, user: "fdfsdfdsfs" };
    const pageContext = await renderPage(pageContextInit);
    if (!pageContext.httpResponse) return next();
    const { statusCode, contentType } = pageContext.httpResponse;
    res.status(statusCode).type(contentType);
    pageContext.httpResponse.pipe(res);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
