import { combineReducers } from "redux";

import signUp from "./signUp";
import login from "./login";

export default combineReducers({
  signUp,
  login,
});
