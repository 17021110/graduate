// sagas.js
import { takeEvery, put, call } from "redux-saga/effects";
import {
  setData,
  setDataProductAdmin,
  adminGetAllProduct,
  setDataProductUser,
  setLoading,
} from "./action";
import { setToken, setTokenAdmin } from "../utils/index";
import {configService} from "../services/configRequest"
import { ConstantAPI } from "../services/ConstantAPI";
import {requestNoAuth} from "../services/requestNoAuth";
import {adminRequest} from "../services/adminRequest";
import { message } from "antd";
function* fetchDataSaga() {
  try {
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
    const response = yield call(() =>
      requestNoAuth.callApi(ConstantAPI.auth.LOGIN_USER, { ...data?.payload }, null)
    );
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

function* FetchProductAdmin() {
  try {
    // Simulate an API call
    const response = yield call(() =>
      requestNoAuth.callApi(
        ConstantAPI.product.GET_ALL,
        null,
        null
      )
    );

    if (response?.success === true) {
      yield put(setDataProductAdmin(response?.data?.row));
      
    } else {
      message.error(response.reason);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function* FetchProductUser() {
  try {
    // Simulate an API call
    const response = yield call(() =>
      configService.callApi(ConstantAPI.product.GET_ALL, null, null)
    );

    if (response?.success === true) {
      yield put(setDataProductUser(response?.data?.row));
    } else {
      message.error(response.reason);
    }
    yield put(setLoading(false));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


function* CreateProduct(data) {
  try {
    // Simulate an API call
    const response = yield call(() =>
      adminRequest.callApi(ConstantAPI.product.CREATE, data?.payload, null)
    );

    if (response?.success === true) {
      message.success('thành công');
      yield put(adminGetAllProduct());
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
  yield takeEvery("GET_ALL_PRODUCT_ADMIN", FetchProductAdmin);
  yield takeEvery("GET_ALL_PRODUCT_USER", FetchProductUser);
  yield takeEvery("CREATE_PRODUCT", CreateProduct);
}

export default rootSaga;
