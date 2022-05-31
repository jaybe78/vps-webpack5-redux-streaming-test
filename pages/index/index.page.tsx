import styled from "styled-components";
import("isomorphic-fetch");
import MovieList from "../../components/Movies";
import React from "react";
import { Counter } from "./Counter";
import { useSelector } from "react-redux";
export { Page };
import LazyView from "../../common/LazyView";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Lazy = React.lazy(() => import("../../components/Weather"));
// const LazyMovies = React.lazy(() => import('../../components/Movies'))

function Page() {
  const { value: count } = useSelector((state) => state.counterReducer);
  return (
    <>
      <h1>Welcome to Bulbshare</h1>
      <React.Suspense fallback={<p>I'm lazy loaded...</p>}>
        <Lazy />
      </React.Suspense>
      That value comes from the updated redux store: {count} <br />
      <Counter />
      <React.Suspense fallback={<p>I'm lazy loaded...</p>}>
        <LazyView name="Movies" />
      </React.Suspense>
    </>
  );
}
