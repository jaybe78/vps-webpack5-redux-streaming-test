import("isomorphic-fetch");
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import LazyPage from "../common/LazyView";

export { Page };

const LazyHome = LazyPage({ page: "Home" });
const LazyAbout = LazyPage({ page: "About" });
function Page() {
  return (
    <>
      <React.Suspense
        fallback={<span className="no-result-search">Loading...</span>}
      >
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/about" element={<LazyAbout />} />
        </Routes>
      </React.Suspense>
    </>
  );
}
