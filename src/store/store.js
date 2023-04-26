import { configureStore } from '@reduxjs/toolkit';
import { rnacentralApi } from "../slice/apiSlice";

export const store = configureStore({
  reducer: {
    [rnacentralApi.reducerPath]: rnacentralApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rnacentralApi.middleware),
})
