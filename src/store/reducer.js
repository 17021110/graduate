import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
const reducers = combineReducers({
  root: authReducer,
});

export default reducers;
