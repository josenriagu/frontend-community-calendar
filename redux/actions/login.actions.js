import * as types from '../constants/login.constants';

const loginRequest = payload => ({
  type: types.LOGIN_REQUEST,
  payload,
});

const loginSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

const loginError = payload => ({
  type: types.LOGIN_ERROR,
  payload,
});

export const loginStatus = user => dispatch => {
  console.log('action', user);
  dispatch(loginRequest(true));
  if (user) {
    dispatch(loginSuccess(user));
  } else {
    dispatch(loginError('an error occured'));
  }
};
