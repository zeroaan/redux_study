import { combineReducers } from "redux";
import number from "./number_reducer";

const rootReducer = combineReducers({
  number,
});

export default rootReducer;
