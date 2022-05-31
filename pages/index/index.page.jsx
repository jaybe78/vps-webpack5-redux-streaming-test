import('isomorphic-fetch');
import MovieList from "../../components/Movies";
import React from 'react'
import { Counter } from './Counter'
import { useSelector, useDispatch } from 'react-redux'
export { Page }

const Lazy = React.lazy(() => import('../../components/Weather'))

function Page() {
    const count = useSelector((state) => state.value)
  return (
    <>
      <React.Suspense fallback={<p>Loading weather...</p>}>
          <Lazy />
      </React.Suspense>
      <h1>Welcome</h1>
      This page is: {count}
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
          <React.Suspense fallback={<p>Loading movies...</p>}>
        <MovieList />
      </React.Suspense>
    </>
  )
}



