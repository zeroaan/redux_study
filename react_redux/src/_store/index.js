import PromiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import Reducer from "../_reducers";

const createStoreWithMiddleware = applyMiddleware(
  PromiseMiddleware,
  ReduxThunk
)(createStore);

export const store = createStoreWithMiddleware(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
