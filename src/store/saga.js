// sagas.js
import { takeEvery, put, call } from "redux-saga/effects";
import { setData } from "./actions";
import {configService} from "../services/configRequest"
import { ConstantAPI } from "../services/ConstantAPI";
function* fetchDataSaga() {
  try {
    // Simulate an API call
    const data = yield call(() =>
      configService.callApi(ConstantAPI.auth.LOGIN,null,null)
    );

    yield put(setData(data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_DATA", fetchDataSaga);
}

export default rootSaga;
