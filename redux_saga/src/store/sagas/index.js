import { all } from "redux-saga/effects";
import counterSaga from "./counter_saga";

export default function* rootSaga() {
  yield all([counterSaga()]);
}
