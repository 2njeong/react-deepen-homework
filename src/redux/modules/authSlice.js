import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    authLoginChange: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export default authSlice.reducer;

export const { authLoginChange } = authSlice.actions;
