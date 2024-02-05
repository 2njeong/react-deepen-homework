import { createStore, combineReducers } from "redux";
import { selectedBtnReducer } from "../modules/selectedBtnReducer";
import { letterReducer } from "../modules/letterReducer";
import { letterListReducer } from "../../redux/modules/letterListReducer";
import { clickReducer } from "../modules/clickReducer";

const rootReducer = combineReducers({
  selectedBtnReducer,
  letterReducer,
  letterListReducer,
  clickReducer,
});

const store = createStore(rootReducer);

export default store;
