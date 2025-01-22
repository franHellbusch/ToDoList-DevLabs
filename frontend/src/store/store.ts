import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./states/task";
import authReducer from "./states/auth";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
