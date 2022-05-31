
## Html not updated when fetching data (useAsync())
Problem: I have a component `<Movies />` which fetches some data, but  it seems the stream does not get injected as the html is not updated.

Note: Wrapping up a component fetching data with `React Lazy` has solved the problem. (`Weather`)


- index.page.jsx
```
const Lazy = React.lazy(() => import('../../components/Weather'))

function Page() {
    const count = useSelector((state) => state.value)
  return (
    <>
      {/* successfully injected into the html */}
      <React.Suspense fallback={<p>Loading weather...</p>}>
          <Lazy />
      </React.Suspense>
     ...
       {/* this is not getting injected into the html */}
       <React.Suspense fallback={<p>Loading movies...</p>}>
        <MovieList />
      </React.Suspense>
    </>
  )
}
```

- Movies.jsx
```
import { useAsync } from "react-streaming";

export default function MovieList() {
  const movies = useAsync(async () => {
    const response = await fetch('https://star-wars.brillout.com/api/films.json')
    return response.json()
  })
  return (
    <ul>
      {movies.results.forEach((movie) => {
          console.log(movie.director)
          return (
              <li>
                  {movie.director}
              </li>
          )

      })}
    </ul>
  )
}
```

- _default.page.client.jsx

```
export { render };
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const store = getStore(pageContext.PRELOADED_STATE)
  hydrateRoot(
    document.getElementById("page-view"),
      <ReactStreaming>
       <Provider store={store}>
        <PageLayout>
         <Page {...pageProps} />
        </PageLayout></Provider>
    </ReactStreaming>
  );
}
```

- _default.page.server.jsx
```
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  const stream = await renderToStream(
      <Provider store={pageContext.store}>
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout></Provider>,
    {
      disable: false,
      webStream: false,
    }
  );

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`;
}
```


## What's the proper way of updating `redux` store

I managed to do it but not sure it's the right way to do so

If we look at `_default.page.server.jsx`, I fetch some data and then dispatch the result to update the state.

What I've noticed is that, in the `render` function, `store.getState()` has not been updated yet so I have to pass the return the new store from `onBeforeRender`.

- _default.page.server.jsx
```
async function onBeforeRender(pageContext) {
  const store = getStore(pageContext.PRELOADED_STATE);
  const list = await fetch('https://xeno-canto.org/api/2/recordings?query=cnt:brazil')
  const result = await list.json()

  store.dispatch({ type: 'update_count', payload: result.numPages })

  // Grab the initial state from our Redux store
  const PRELOADED_STATE = store.getState()
  console.log(PRELOADED_STATE)
  return {
    pageContext: {
      PRELOADED_STATE,
      store,
    },
  }
}
```
