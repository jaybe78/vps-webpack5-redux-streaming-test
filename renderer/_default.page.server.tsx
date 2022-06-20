
import React from "react";
import { escapeInject } from "vite-plugin-ssr";
import { PageLayout } from "./PageLayout";
export { render };
// import { getStore } from "./store";
// import { Provider } from "react-redux";
// import { PageContext } from "./types";
import { renderToStream } from "react-streaming/server";
import { updateCount } from "../features/counter/counterSlice";
import { authenticateUser } from "../features/user/userSlice";
import { StaticRouter } from "react-router-dom/server";

export { passToClient };
export { onBeforeRender };

// See https://vite-plugin-ssr.com/data-fetching
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
  console.log("server");
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
  // const store = getStore(pageContext.initialStoreState);
  const list = await fetch(
    "https://xeno-canto.org/api/2/recordings?query=cnt:brazil"
  );
  const result = await list.json();
  // store.dispatch(updateCount(result.numPages));
  // await store.dispatch(authenticateUser());

  // Grab the initial state from our Redux store
  // const initialStoreState = store.getState();
  return {
    pageContext: {
      // initialStoreState,
      pageProps: {
        toto: "bb",
        user: "toto",
        loggedIn: true,
      },
    },
  };
}
