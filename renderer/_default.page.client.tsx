import { hydrateRoot } from "react-dom/client";
import React from "react";
import { ReactStreaming } from "../react-streaming/client";
import { BrowserRouter } from "react-router-dom";

export { render };

async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  // const store = getStore(pageContext.initialStoreState);
  const container = document.getElementById("page-view")!;
  const page = (
    // @ts-ignore
    <ReactStreaming>
      <BrowserRouter>
        <Page {...pageProps} />
      </BrowserRouter>
    </ReactStreaming>
  );
  hydrateRoot(container, page);
}
