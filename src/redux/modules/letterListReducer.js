import { fakeData } from "../../shared/data";

const ADD_LETTERLIST = "letterList/addLetterList";
const EDITNDELETE_LETTERIST = "letterList/editNdeleteLetterList";

export const addLetterList = (resultLetter) => {
  return {
    type: ADD_LETTERLIST,
    resultLetter,
  };
};
export const editNdeleteLetterList = (payload) => {
  return {
    type: EDITNDELETE_LETTERIST,
    payload,
  };
};

export const initialSate = {
  letterList: [...fakeData],
};

export const letterListReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_LETTERLIST:
      return {
        letterList: [action.resultLetter, ...state.letterList],
      };
    case EDITNDELETE_LETTERIST:
      return {
        letterList: action.payload,
      };
    default:
      return state;
  }
};
