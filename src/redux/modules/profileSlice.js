import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: {},
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    getProfile: (state = initialState, action) => {
      state.profiles = { ...action.payload };
    },
  },
});

export default profileSlice.reducer;

export const { getProfile } = profileSlice.actions;
