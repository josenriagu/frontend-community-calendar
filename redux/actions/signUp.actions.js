import * as types from '../constants/signUp.constants';

const signUpRequest = payload => ({
  type: types.SIGNUP_REQUEST,
  payload,
});

export const signUpSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

export const signUpError = payload => ({
  type: types.SIGNUP_ERROR,
  payload,
});

export const signUpStatus = user => dispatch => {
  dispatch(signUpRequest(true));
  if (user.name) dispatch(signUpSuccess(user));
  else dispatch(signUpError('signup error'));
};
