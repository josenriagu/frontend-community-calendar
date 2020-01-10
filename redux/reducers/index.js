import { combineReducers } from "redux";

import signUp from "./signUp";
import login from "./Login";

export default combineReducers({
  signUp,
  login
});
