import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  click: false,
};

const clickSlice = createSlice({
  name: "clickSlice",
  initialState,
  reducers: {
    clickChangeTrue: () => {
      return {
        click: true,
      };
    },
    clickChangeFalse: () => {
      return {
        click: false,
      };
    },
  },
});

export default clickSlice.reducer;

export const { clickChangeTrue, clickChangeFalse } = clickSlice.actions;
