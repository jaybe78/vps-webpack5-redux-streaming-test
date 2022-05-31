import ReactDOMServer from "react-dom/server";
import React from "react";
import { escapeInject, dangerouslySkipEscape, pipeNodeStream, pipeWebStream } from "vite-plugin-ssr";
import { PageLayout } from "./PageLayout";
import { renderToStream } from "react-streaming/server";
export { render };
import {getStore} from "./store";
import { Provider } from "react-redux";

export { passToClient };
export { onBeforeRender }

// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ["pageProps", 'PRELOADED_STATE'];

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const stream = await renderToStream(
      <Provider store={pageContext.store}>
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout></Provider>,
    {
      disable: false,
      webStream: false,
    }
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
}

async function onBeforeRender(pageContext) {
  const store = getStore(pageContext.PRELOADED_STATE);
  const list = await fetch('https://xeno-canto.org/api/2/recordings?query=cnt:brazil')
  const result = await list.json()

  store.dispatch({ type: 'update_count', payload: result.numPages })

  // Grab the initial state from our Redux store
  const PRELOADED_STATE = store.getState()
  console.log(PRELOADED_STATE)
  return {
    pageContext: {
      PRELOADED_STATE,
      store,
    },
  }
}