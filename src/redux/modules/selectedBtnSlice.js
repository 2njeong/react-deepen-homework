import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBtn: null,
};

const seletedBtnSlice = createSlice({
  name: "selectedBtnSlice",
  initialState,
  reducers: {
    selectClick: (state, action) => {
      return {
        selectedBtn: action.payload,
      };
    },
    goHomeClick: (state, action) => {
      return {
        selectedBtn: null,
      };
    },
  },
});

export const { goHomeClick, selectClick } = seletedBtnSlice.actions;
export default seletedBtnSlice.reducer;
