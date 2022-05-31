import { hydrateRoot } from "react-dom/client";
import React from "react";
import { PageLayout } from "./PageLayout";
import { getStore } from "./store.js";
import { Provider } from "react-redux";
import { ReactStreaming } from "react-streaming/client";
import { PageContext } from "./types";

export { render };
async function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  console.log("client", pageProps);
  const store = getStore(pageContext.initialStoreState);
  hydrateRoot(
    // @ts-ignore
    document.getElementById("page-view"),
    <ReactStreaming>
      <Provider store={store}>
        <PageLayout pageContext={pageContext}>
          <Page {...pageProps} />
        </PageLayout>
      </Provider>
    </ReactStreaming>
  );
}
