import { configureStore } from "@reduxjs/toolkit";
import periodicTableReducer, { periodicApi } from "./periodicTable";
import userReducer from "./user";

export const store = configureStore({
  reducer: {
    [periodicApi.reducerPath]: periodicApi.reducer,
    periodicTable: periodicTableReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(periodicApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
