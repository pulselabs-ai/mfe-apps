import { configureStore } from "@reduxjs/toolkit";
import { MfaReducers } from "./slices";

const MfaStore = configureStore({
  reducer: MfaReducers,
});

export type RootState = ReturnType<typeof MfaStore.getState>;
export type AppDispatch = typeof MfaStore.dispatch;

export { MfaStore };
