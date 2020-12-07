import { createStore, applyMiddleware, compose } from "redux";
import createSaga from "redux-saga";
import saga from "./sagas";
import Reducer from "./reducers";

const sagaMiddleWare = createSaga();

export const store = createStore(
  Reducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(saga);
