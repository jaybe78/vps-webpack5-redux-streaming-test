
import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import LazyPage from "../common/LazyView";

export { Page };

const LazyHome = LazyPage({ page: "Home" });
const LazyAbout = LazyPage({ page: "About" });
function Page() {
  return (
    <>
      <b>
        <i>
          Time elapsed: <TimeElapsed />
        </i>
        <Counter />
      </b>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
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

function TimeElapsed() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return <>{count}</>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      style={{ marginLeft: 10 }}
    >
      Count: <span>{count}</span>
    </button>
  );
}
