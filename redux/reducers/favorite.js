import * as types from '../constants/favorite';

const initialState = {
  requesting: false,
  favoriteEvents: [],
  success: null,
  error: null,
};

export default function favorite(state = initialState, action) {
  switch (action.type) {
    case types.DO_FAVORITE_REQUEST:
      return {
        ...state,
        requesting: action.payload,
      };
    case types.DO_FAVORITE_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: action.payload,
        error: null,
      };
    case types.DO_FAVORITE_ERROR:
      return {
        ...state,
        requesting: false,
        success: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
