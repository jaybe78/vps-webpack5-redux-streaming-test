import React from "react";
import "./PageLayout.css";
import { PageContextProvider } from "./usePageContext";
import { PageContext } from "./types";

export type LayoutProps = {
  children: JSX.Element;
};

export { PageLayout };

function PageLayout({
  pageContext,
  children,
}: LayoutProps & { pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Layout>
          <>
            <Sidebar>
              <>
                <a className="navitem" href="/">
                  Home
                </a>
                <a className="navitem" href="/about">
                  About
                </a>
              </>
            </Sidebar>
            <Content>{children}</Content>
          </>
        </Layout>
      </PageContextProvider>
    </React.StrictMode>
  );
}

function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Sidebar({ children }: LayoutProps) {
  return (
    <div
      style={{
        padding: 20,
        paddingTop: 42,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }: LayoutProps) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}
