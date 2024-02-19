import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedBtn: null,
};

const seletedBtnSlice = createSlice({
  name: "selectedBtnSlice",
  initialState,
  reducers: {
    selectClick: (state = initialState, action) => {
      return {
        selectedBtn: action.payload,
      };
    },
    goHomeClick: (state = initialState, action) => {
      return {
        selectedBtn: null,
      };
    },
  },
});

export const { goHomeClick, selectClick } = seletedBtnSlice.actions;
export default seletedBtnSlice.reducer;

// export const SELECT_MEMBER = "selecedBtn/selectMember";
// export const GO_HOME = "selectedBtn/goHome";

// export const selectClick = (id) => {
//   return {
//     type: SELECT_MEMBER,
//     id,
//   };
// };

// export const goHomeClick = () => {
//   return {
//     type: GO_HOME,
//   };
// };

// export const selectedBtnReducer = (state = initialSate, action) => {
//   switch (action.type) {
//     case SELECT_MEMBER:
//       return {
//         selectedBtn: action.id,
//       };
//     case GO_HOME:
//       return {
//         selectedBtn: null,
//       };
//     default:
//       return state;
//   }
// };
