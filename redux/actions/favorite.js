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

export const addFavorite = (event, userId) => async dispatch => {
  dispatch(doFavoriteRequest(true));
  axios
    .post('https://comcalstaging.herokuapp.com/api/v1/favorite', { event, userId })
    .then(({ data }) => {
      dispatch(doFavoriteRequest(false));
      dispatch(doFavoriteSuccess(data.message));
      message.success(data.message);
    })
    .catch(error => {
      dispatch(doFavoriteError(error));
      if (error.message === 'Request failed with status code 400') {
        message.error('You have already added this event to favourites!');
      } else message.error(error.message || 'Failed to add to favourites');
    });
};

export const removeFavorite = (event, userId) => dispatch => {
  dispatch(doFavoriteRequest(true));
  axios
    .delete('https://comcalstaging.herokuapp.com/api/v1/favorite', { data: { event, userId } })
    .then(({ data }) => {
      dispatch(doFavoriteRequest(false));
      dispatch(doFavoriteSuccess(data.message));
      message.success(data.message);
    })
    .catch(error => {
      dispatch(doFavoriteError(error));
      message.error(error.message);
    });
};
