import { hydrateRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { PageLayout } from "./PageLayout";
import { getStore } from "./store.js";
import { Provider } from "react-redux";
import { ReactStreaming } from "react-streaming/client";
import { PageContext } from "./types";

export const clientRouting = true;
export { render };
export { onHydrationEnd };


let root: ReactDOM.Root;
async function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext;
  console.log("client", pageProps);
  console.log("pageContext.isHydration", pageContext.isHydration);
  const store = getStore(pageContext.initialStoreState);
  const container = document.getElementById("page-view")!;
  const page = (
    // @ts-ignore
    <ReactStreaming>
      <Provider store={store}>
        <PageLayout pageContext={pageContext}>
          <Page {...pageProps} />
        </PageLayout>
      </Provider>
    </ReactStreaming>
  );
  if (pageContext.isHydration) {
    root = hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
}

function onHydrationEnd() {
  console.log("Hydration finished; page is now interactive.");
}
