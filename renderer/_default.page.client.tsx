import { hydrateRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { PageLayout } from "./PageLayout";
import { getStore } from "./store.js";
import { Provider } from "react-redux";
import { ReactStreaming } from "../react-streaming/client";
import { PageContext } from "./types";
import { BrowserRouter } from "react-router-dom";

export { render };

async function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  const store = getStore(pageContext.initialStoreState);
  const container = document.getElementById("page-view")!;
  const page = (
    // @ts-ignore
    <ReactStreaming>
      <Provider store={store}>
        <BrowserRouter>
          <Page {...pageProps} />
        </BrowserRouter>
      </Provider>
    </ReactStreaming>
  );
  hydrateRoot(container, page);
}
