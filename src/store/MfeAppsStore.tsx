import { configureStore } from "@reduxjs/toolkit";
import { MfeAppsReducers } from "./slices";

const MfeAppsStore = configureStore({
  reducer: MfeAppsReducers,
});

export type RootState = ReturnType<typeof MfeAppsStore.getState>;
export type AppDispatch = typeof MfeAppsStore.dispatch;

export { MfeAppsStore };
