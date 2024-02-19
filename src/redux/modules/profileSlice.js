import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    addProfile: (state = initialState, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export default profileSlice.reducer;

export const { addProfile } = profileSlice.actions;
