import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginUser: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    loginChange: (state = initialState, action) => {
      return (state.loginUser = { ...action.payload, isLogin: true });
    },
  },
});

export default authSlice.reducer;

export const { loginChange } = authSlice.actions;
