import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  letterList: [],
};

const letterListSlice = createSlice({
  name: "letterListSlice",
  initialState,
  reducers: {
    addLetterList: (state = initialState, action) => {
      state.letterList = [...action.payload, ...state.letterList];
    },
    editNdeleteLetterList: (state = initialState, action) => {
      return {
        letterList: action.payload,
      };
    },
  },
});

export default letterListSlice.reducer;

export const { addLetterList, editNdeleteLetterList } = letterListSlice.actions;
