import {
  // takeEvery,
  takeLatest,
  put,
  call,
} from "redux-saga/effects";
import { addNumber, mulNumber } from "../actions/counter_action";

function fetchNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 30));
    }, 1000);
  });
}

function* computeCount(action) {
  yield call(action.setLoading, true);
  const random1 = yield call(fetchNumber);
  const random2 = yield call(fetchNumber);
  yield put(addNumber(random1));
  yield put(mulNumber(random2));
  yield call(action.setLoading, false);
}

function* counterSaga() {
  // yield takeEvery("MYNUMBER", computeCount); // 모든 액션 실행
  yield takeLatest("MYNUMBER", computeCount); // 가장 마지막 액션만 실행
}

export default counterSaga;
