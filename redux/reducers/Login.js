import * as types from '../constants/login.constants';

const initialState = {
  requesting: false,
  user: {},
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        requesting: action.payload,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
