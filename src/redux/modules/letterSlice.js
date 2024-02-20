import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: "",
  option: "",
};

const letterSlice = createSlice({
  name: "letterSlice",
  initialState,
  reducers: {
    contentHandler: (state = initialState, action) => {
      return {
        ...state,
        content: action.payload,
      };
    },
    renewContent: (state = initialState, action) => {
      return {
        ...state,
        content: "",
      };
    },
    toWhomHandelr: (state = initialState, action) => {
      return {
        ...state,
        option: action.payload,
      };
    },
    selectNoOneHandler: (state = initialState, action) => {
      return {
        ...state,
        option: "",
      };
    },
  },
});

export default letterSlice.reducer;

export const {
  contentHandler,
  renewContent,
  toWhomHandelr,
  selectNoOneHandler,
} = letterSlice.actions;
