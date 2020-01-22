import * as types from '../constants/events';

const initialState = {
  requesting: false,
  events: [],
  error: null,
};

export default function fetchEvents(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_EVENT_REQUEST:
      return {
        ...state,
        requesting: action.payload,
        events: [],
        error: null,
      };
    case types.FETCH_EVENT_SUCCESS:
      return {
        ...state,
        requesting: false,
        events: action.payload,
        error: null,
      };
    case types.FETCH_EVENT_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.payload,
        events: [],
      };
    default:
      return state;
  }
}
