import { configureStore } from "@reduxjs/toolkit";
import selectedBtnSlice from "../modules/selectedBtnSlice";
import letterSlice from "../modules/letterSlice";
import letterListSlice from "../modules/letterListSlice";
import clickSlice from "../modules/clickSlice";
import profileSlice from "../modules/profileSlice";
import authSlice from "../modules/authSlice";

const store = configureStore({
  reducer: {
    authSlice,
    profileSlice,
    selectedBtnSlice,
    letterSlice,
    letterListSlice,
    clickSlice,
  },
});

export default store;
