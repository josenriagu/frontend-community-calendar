import { combineReducers } from 'redux';

import user from './user';
import fetchEvents from './events';
import favorite from './favorite';

export default combineReducers({
  user,
  fetchEvents,
  favorite,
});
