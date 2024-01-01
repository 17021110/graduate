import { all, put, takeEvery } from '@redux-saga/core/effects';
import {
    loginActionResult,
} from './actions';

import types from './type';

function* loginSaga(props) {
    const { data, setLoginErr } = props.payload;
    try {
       console.log(data);
    } catch (error) {
        const isSuccess = false;
        setLoginErr();
        yield put(loginActionResult(error, isSuccess));
    }
}



export default function* authSaga() {
    yield all([
        takeEvery(types.LOGIN, loginSaga),
    ]);
}
