import axios from 'axios';

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
    .post('http://localhost:4000/api/v1/favorite', { eventId, userId })
    .then(({ data }) => {
      dispatch(doFavoriteRequest(false));
      dispatch(doFavoriteSuccess(data.message));
      // eslint-disable-next-line no-alert
      alert(data.message);
    })
    .catch(error => {
      dispatch(doFavoriteError(error));
    });
};

export const removeFavorite = (eventId, userId) => dispatch => {
  dispatch(doFavoriteRequest(true));
  axios
    .delete('http://localhost:4000/api/v1/favorite', { data: { eventId, userId } })
    .then(({ data }) => {
      dispatch(doFavoriteRequest(false));
      dispatch(doFavoriteSuccess(data.message));
      // eslint-disable-next-line no-alert
      alert(data.message);
    })
    .catch(error => {
      dispatch(doFavoriteError(error));
    });
};
