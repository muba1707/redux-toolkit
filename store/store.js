import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import CounterReducer from "./Counter";
import fakeApi from "./api";

const middleware = [fakeApi.middleware];

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    [fakeApi.reducerPath]: fakeApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware);
  },
});

setupListeners(store.dispatch);

export default store;
