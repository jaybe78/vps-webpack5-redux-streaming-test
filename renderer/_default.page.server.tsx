import React from "react";
import { escapeInject } from "vite-plugin-ssr";
export { render };
import { renderToStream } from "../react-streaming/server";
import { StaticRouter } from "react-router-dom/server";

export { passToClient };
export { onBeforeRender };


const passToClient = ["pageProps", "initialStoreState"];

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  // const store = getStore(pageContext.initialStoreState);

  const stream = await renderToStream(
    <StaticRouter location={pageContext.url}>
      <Page {...pageProps} />
    </StaticRouter>,
    {
      disable: false,
      webStream: false,
    }
  );
  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
      <title>Bulbshare</title>
    </head>  
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
}

async function onBeforeRender(pageContext) {
  const translations = await import("../locales/en.json");
  return {
    pageContext: {
      pageProps: {
        translations,
        currentLocale: "en",
      },
    },
  };
}
