import { configureStore } from "@reduxjs/toolkit";
import selectedBtnSlice from "../modules/selectedBtnSlice";
import letterSlice from "../modules/letterSlice";
import letterListSlice from "../modules/letterListSlice";
import clickSlice from "../modules/clickSlice";

const store = configureStore({
  reducer: {
    selectedBtnSlice,
    letterSlice,
    letterListSlice,
    clickSlice,
  },
});

export default store;
