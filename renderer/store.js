import { createStore } from 'redux'

export { getStore }

function getStore(PRELOADED_STATE) {
  const store = createStore(counterReducer, PRELOADED_STATE)
  return store
}

function counterReducer(state = { value: 999 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    case 'update_count': {
      console.log('update', action)
      return { value: action.payload }
    }
    default:
      return state
  }
}