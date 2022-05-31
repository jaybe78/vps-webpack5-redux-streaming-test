import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import counterReducer from "../features/counter/counterSlice";

function getStore(PRELOADED_STATE) {
  return configureStore({
    reducer: {
      userReducer,
      counterReducer,
    },
    preloadedState: PRELOADED_STATE,
    devTools: true,
  });
}

export { getStore };
