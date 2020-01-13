import { combineReducers } from 'redux';

import signUp from './signUp';
import fetchEvents from './events';

export default combineReducers({
  signUp,
  fetchEvents,
});
