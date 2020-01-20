import axios from 'axios';
import { message } from 'antd';

import * as types from '../constants/favorite';

export const doFavoriteRequest = payload => ({
  type: types.DO_FAVORITE_REQUEST,
  payload,
});

export const doFavoriteSuccess = payload => ({
  type: types.DO_FAVORITE_SUCCESS,
  payload,
});

export const doFavoriteError = payload => ({
  type: types.DO_FAVORITE_ERROR,
  payload,
});

export const addFavorite = (eventId, userId) => dispatch => {
  dispatch(doFavoriteRequest(true));
  axios
    .post('https://comcalstaging.herokuapp.com/api/v1/favorite', { eventId, userId })
    .then(({ data }) => {
      dispatch(doFavoriteRequest(false));
      dispatch(doFavoriteSuccess(data.message));
      message.success(data.message);
    })
    .catch(error => {
      dispatch(doFavoriteError(error));
    });
};

export const removeFavorite = (eventId, userId) => dispatch => {
  dispatch(doFavoriteRequest(true));
  axios
    .delete('https://comcalstaging.herokuapp.com/api/v1/favorite', { data: { eventId, userId } })
    .then(({ data }) => {
      dispatch(doFavoriteRequest(false));
      dispatch(doFavoriteSuccess(data.message));
      message.success(data.message);
    })
    .catch(error => {
      dispatch(doFavoriteError(error));
    });
};
