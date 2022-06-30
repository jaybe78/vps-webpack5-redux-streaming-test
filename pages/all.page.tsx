import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import LazyPage from "../common/LazyView";
import { IntlProvider } from "react-intl";
import { PageProps } from "../renderer/types";
import Home from "./Home";
import About from "./About";
import SuspenseTest from "./About";

export { Page };

const LazyHome = LazyPage({ page: "Home" });
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
        fallback={<span className="no-result-search">Loading...</span>}>
        <Routes>
                
          <Route path="/" element={
           
      
              <SuspenseTest />
                   } />
             
             <Route path="about" element={<About />} />
        </Routes>
     </React.Suspense>
    </IntlProvider>
  );
}
