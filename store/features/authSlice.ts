import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AuthState } from "@/app/models";

// Initial state
const initialState: AuthState = {
  authState: false,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState: (state, action) => ({...state, ...action.payload})
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;