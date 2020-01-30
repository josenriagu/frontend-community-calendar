import * as types from '../constants/events';

const initialState = {
  events: {
    requesting: false,
    events: [],
    error: null,
  },
  favEvents: {
    requesting: false,
    favEvents: [],
    error: null,
  },
};

export default function fetchEvents(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_EVENT_REQUEST:
      return {
        ...state,
        events: {
          requesting: action.payload,
          events: [],
          error: null,
        },
      };
    case types.FETCH_EVENT_SUCCESS:
      return {
        ...state,
        events: {
          requesting: false,
          events: action.payload,
          error: null,
        },
      };
    case types.FETCH_EVENT_ERROR:
      return {
        ...state,
        events: {
          requesting: false,
          error: action.payload,
          events: [],
        },
      };
    case types.FETCH_FAV_EVENT_REQUEST:
      return {
        ...state,
        favEvents: {
          requesting: true,
          error: null,
          events: [],
        },
      };
    case types.FETCH_FAV_EVENT_SUCCESS:
      return {
        ...state,
        favEvents: {
          requesting: false,
          error: null,
          events: action.payload,
        },
      };
    case types.FETCH_FAV_EVENT_ERROR:
      return {
        ...state,
        favEvents: {
          requesting: false,
          error: action.payload,
          events: [],
        },
      };
    default:
      return state;
  }
}
