import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import LazyPage from "../common/LazyView";
import { IntlProvider } from "react-intl";
import { PageProps } from "../renderer/types";

export { Page };

const LazyHome = LazyPage({ page: "Home" });
const LazyAbout = LazyPage({ page: "About" });
function Page({ translations, currentLocale }: PageProps) {
  const [lang, setLang] = useState<string>("en");
  const [messages, setMessages] = useState(translations);

  return (
    <IntlProvider
      key={lang}
      messages={messages}
      locale={lang}
      defaultLocale={currentLocale}
    >
      <React.Suspense
        fallback={<span className="no-result-search">Loading...</span>}
      >
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/about" element={<LazyAbout />} />
        </Routes>
      </React.Suspense>
    </IntlProvider>
  );
}
