
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import operationsReducer from "./features/operationsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    operations: operationsReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;