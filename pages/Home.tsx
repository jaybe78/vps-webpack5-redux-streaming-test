// import { useSelector } from "react-redux";
import { State } from "../renderer/types";
import React from "react";
import Code from "../components/Code";

export default function Home() {
  // const { firstname } = useSelector((state: State) => state.userReducer);
  const LazyMovies = React.lazy(() => import("./../components/Movies"));
  const LazyWeater = React.lazy(() => import("./../components/Weather"));
  return (
    <div>
      {/*{firstname}*/}
      <h2>Home</h2>
      <p>Example of client-side routing with React Router and SSR.</p>
      This page is rendered to HTML, see{" "}
      <Code>view-source:http://localhost:3000</Code>.
      {/*<React.Suspense fallback={<p>I'm lazy loaded...</p>}>*/}
      {/*  <LazyWeater />*/}
      {/*</React.Suspense>*/}
      {/*That value comes from the updated redux store: {count} <br />*/}
      {/*<Counter />*/}
      {/*<Login />*/}
      {/*<React.Suspense fallback={<p>I'm lazy loaded...</p>}>*/}
      {/*  <LazyMovies />*/}
      {/*</React.Suspense>*/}
    </div>
  );
}
