import { createStore, combineReducers } from "redux";
import { selectedBtnReducer } from "../modules/selectedBtnReducer";
import { letterReducer } from "../modules/letterReducer";
import { letterListReducer } from "../../redux/modules/letterListReducer";

const rootReducer = combineReducers({
  selectedBtnReducer,
  letterReducer,
  letterListReducer,
});

const store = createStore(rootReducer);

export default store;
