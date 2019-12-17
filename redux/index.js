import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combinedReducers from './reducers';

const composeEnhancers = typeof window
  !== 'undefined'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  || compose;

export const reduxStore = (initialState = {}) => createStore(
  combinedReducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk, logger)),
);
