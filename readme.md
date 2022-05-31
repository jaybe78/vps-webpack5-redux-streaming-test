
## What's the proper way of updating `redux` store ?

If we look at `_default.page.server.jsx`, I fetch some data and then dispatch the result to update the state.

What I've noticed is that, after dispatching the action, in the `render` function, `store.getState()` has not been updated yet... so the only "solution" I have found is to return the updated store from `onBeforeRender`.


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
