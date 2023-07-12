'use client'
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Type for our state
export interface UserState {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

// Initial state
const initialState: UserState = {
  name: "",
  lastName: "",
  email: "",
  password: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createUser: (state, action) => action.payload,
    modifyUser: (state, action) => ({...state, ...action.payload})
  },
});

export const { createUser, modifyUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
