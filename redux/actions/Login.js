import * as types from "../constants/Login";

const setLoginPending = pending => {
  return {
    type: types.SET_LOGIN_PENDING,
    payload: pending
  };
};

const setLoginSuccess = payload => {
  return {
    type: types.SET_LOGIN_SUCCESS,
    payload
  };
};

const setLoginError = error => {
  return {
    type: types.SET_LOGIN_ERROR,
    payload: error
  };
};

export const loginStatus = data => dispatch => {
  dispatch(setLoginPending(true));
  console.log("action data", data);
  if (data.id) {
    dispatch(setLoginSuccess(true));
  } else {
    dispatch(setLoginError("an error occured"));
  }
};
