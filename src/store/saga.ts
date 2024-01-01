import { all } from "redux-saga/effects";
import rootSagas from "./auth/saga";


export default function* rootSaga() {
	yield all([
		rootSagas(),
	]);
}
