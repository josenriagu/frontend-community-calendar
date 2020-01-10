import * as types from "../constants/signUp";

export const signUpRequest = status => ({
  type: types.SIGNUP_REQUEST,
  payload: status
});

export const signUpSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload
});

export const signUpError = error => ({
  type: types.SIGNUP_ERROR,
  payload: error
});

export const doSignUp = user => dispatch => {
  dispatch(signUpRequest(true));
  if (user.name) dispatch(signUpSuccess(true));
  else dispatch(signUpError("error"));
};
