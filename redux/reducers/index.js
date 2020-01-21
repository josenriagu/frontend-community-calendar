import { combineReducers } from 'redux';

import signUp from './signUp';
import signIn from './signIn';
import fetchEvents from './events';
import favorite from './favorite';

export default combineReducers({
  signUp,
  signIn,
  fetchEvents,
  favorite,
});
