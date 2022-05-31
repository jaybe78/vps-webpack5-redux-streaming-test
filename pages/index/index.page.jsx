import styled from "styled-components";
import('isomorphic-fetch');
import MovieList from "../../components/Movies";
import React from 'react'
import { Counter } from './Counter'
import { useSelector } from 'react-redux'
export { Page }
import LazyView from "../../common/LazyView";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Lazy = React.lazy(() => import('../../components/Weather'))
// const LazyMovies = React.lazy(() => import('../../components/Movies'))

function Page() {
    const count = useSelector((state) => state.value)
  return (
    <>
      {/* successfully injected into the html */}
      <React.Suspense fallback={<p>Being rendered dynamically from server...</p>}>
          <Lazy />
      </React.Suspense>
      <h1>Welcome</h1>
      {count}
      <ul>
          <li><Title>Rendered to HTML.</Title></li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
       {/* this is not getting injected into the html */}
       <React.Suspense fallback={<p>Rendering list of directors...</p>}>
        <LazyView name='Movies' />
      </React.Suspense>
    </>
  )
}



