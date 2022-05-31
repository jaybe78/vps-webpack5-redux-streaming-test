import { hydrateRoot } from "react-dom/client";
import React from "react";
import { PageLayout } from "./PageLayout";
import {getStore} from "./store.js";
import { Provider } from "react-redux";
import { ReactStreaming } from 'react-streaming/client'

export { render };
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const store = getStore(pageContext.PRELOADED_STATE)
  hydrateRoot(
    document.getElementById("page-view"),
      <ReactStreaming>
     <Provider store={store}>
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout></Provider>
      </ReactStreaming>
  );
}
