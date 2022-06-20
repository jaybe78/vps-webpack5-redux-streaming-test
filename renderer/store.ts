// import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import counterReducer from "../features/counter/counterSlice";

// function getStore(PRELOADED_STATE?: any) {
//   return configureStore({
//     reducer: {
//       userReducer,
//       counterReducer,
//     },
//     preloadedState: PRELOADED_STATE,
//     devTools: __ENV__,
//   });
// }
//
// const store = getStore();

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
//
// export { getStore };
