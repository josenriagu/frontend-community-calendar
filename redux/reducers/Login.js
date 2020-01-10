import * as types from "../constants/Login";

const initialState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_LOGIN_PENDING:
      return { ...state, isLoginPending: action.payload };

    case types.SET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoginPending: false,
        isLoginSuccess: action.payload
      };

    case types.SET_LOGIN_ERROR:
      return { ...state, isLoginPending: false, loginError: action.payload };

    default:
      return state;
  }
}
