// sagas.js
import { takeEvery, put, call } from "redux-saga/effects";
import { setData } from "./action";
import { setToken, setTokenAdmin } from "../utils/index";
import {configService} from "../services/configRequest"
import { ConstantAPI } from "../services/ConstantAPI";
import {requestNoAuth} from "../services/requestNoAuth";
import { message } from "antd";
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
      requestNoAuth.callApi(ConstantAPI.auth.LOGIN_USER, { ...data?.payload }, null)
    );
    console.log(response,'se')
    if (response?.success===true) {
      setToken(JSON.stringify(response));
      window.location.href = "/";
    }else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* LoginAdmin(data) {
  try {
    // Simulate an API call
    const response = yield call(() =>
      requestNoAuth.callApi(ConstantAPI.auth.LOGIN_ADMIN,{...data?.payload}, null )
    );

    if (response?.success === true) {
      setTokenAdmin(JSON.stringify(response));
      window.location.href = "/admin";
    } else {
      message.error(response.reason);
    }

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* RegisterAcount(data) {
  try {
    // Simulate an API call
    const response = yield call(() =>
      requestNoAuth.callApi(
        ConstantAPI.auth.REGISTER_ACOUNT,
        { ...data?.payload },
        null
      )
    );

    if (response?.success === true) {
      message.success('thành công');
      
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_DATA", fetchDataSaga);
  yield takeEvery("LOGIN_USER", LoginUser);
  yield takeEvery("LOGIN_ADMIN", LoginAdmin);
  yield takeEvery("REGISTER_ACOUNT", RegisterAcount);
}

export default rootSaga;
