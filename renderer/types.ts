import { AnyAction, EnhancedStore } from "@reduxjs/toolkit";
import { ThunkMiddleware } from "redux-thunk";

export type PageProps = {};

export type CounterState = {
  value: number;
};

export type UserState = {
  email: string;
  firstname?: string;
  lastname?: string;
  loading?: boolean;
};

export type State = {
  userReducer: UserState;
  counterReducer: CounterState;
};

export type Store = EnhancedStore<
  State,
  AnyAction,
  [ThunkMiddleware<State, AnyAction, undefined>]
>;
// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: (pageProps: PageProps) => React.ReactElement;
  pageProps: PageProps;
  urlPathname: string;
  initialStoreState?: State;
  url: string;
  documentProps?: {
    title?: string;
    description?: string;
  };
};
