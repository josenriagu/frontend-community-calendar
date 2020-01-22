import Router from 'next/router';
import Cookie from 'js-cookie';

import * as types from '../constants/user';

export const logoutRequest = payload => ({
  type: types.LOGOUT_REQUEST,
  payload,
});

export const logoutSuccess = payload => ({
  type: types.LOGOUT_SUCCESS,
  payload,
});

export const logoutError = payload => ({
  type: types.LOGOUT_ERROR,
  payload,
});

export const doLogout = () => dispatch => {
  dispatch(logoutRequest(true));
  Cookie.remove('comcal-event-token');
  if (!Cookie.get('comcal-event-token')) {
    dispatch(logoutSuccess(false));
    Router.push('/');
  } else {
    dispatch(logoutError('User cannot be logged out. Please try again'));
  }
  dispatch(logoutRequest(false));
};
