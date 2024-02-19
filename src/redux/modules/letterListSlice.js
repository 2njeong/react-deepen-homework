import { createSlice } from "@reduxjs/toolkit";
import { fakeData } from "../../shared/data";

// const ADD_LETTERLIST = "letterList/addLetterList";
// const EDITNDELETE_LETTERIST = "letterList/editNdeleteLetterList";

// export const addLetterList = (resultLetter) => {
//   return {
//     type: ADD_LETTERLIST,
//     resultLetter,
//   };
// };
// export const editNdeleteLetterList = (payload) => {
//   return {
//     type: EDITNDELETE_LETTERIST,
//     payload,
//   };
// };

export const initialState = {
  letterList: [...fakeData],
};

// export const letterListReducer = (state = initialSate, action) => {
//   switch (action.type) {
//     case ADD_LETTERLIST:
// return {
//   letterList: [action.resultLetter, ...state.letterList],
// };
//     case EDITNDELETE_LETTERIST:
// return {
//   letterList: action.payload,
// };
//     default:
//       return state;
//   }
// };

const letterListSlice = createSlice({
  name: "letterListSlice",
  initialState,
  reducers: {
    addLetterList: (state = initialState, action) => {
      return {
        letterList: [action.payload, ...state.letterList],
      };
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
