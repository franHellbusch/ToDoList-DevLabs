// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutUser: () => initialState,
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
