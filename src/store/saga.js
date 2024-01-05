// sagas.js
import { takeEvery, put, call } from "redux-saga/effects";
import { setData } from "./action";
import { setToken, setTokenAdmin } from "../utils/index";
import {configService} from "../services/configRequest"
import { ConstantAPI } from "../services/ConstantAPI";
import {requestNoAuth} from "../services/requestNoAuth"
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

function* LoginUser(data) {
  try {
    // Simulate an API call
    const response = yield call(() =>
      requestNoAuth.callApi(ConstantAPI.auth.LOGIN, { ...data?.payload }, null)
    );
    if (response) {
      setTokenAdmin(JSON.stringify(response));
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* LoginAdmin(data) {
  try {
    // Simulate an API call
    const response = yield call(() =>
      requestNoAuth.callApi(ConstantAPI.auth.LOGIN,{...data?.payload}, null )
    );

    if (response) {
      setTokenAdmin(JSON.stringify(response));
      window.location.href = '/admin';
    }

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_DATA", fetchDataSaga);
  yield takeEvery("LOGIN_USER", LoginUser);
  yield takeEvery("LOGIN_ADMIN", LoginAdmin);
}

export default rootSaga;
