/* eslint-disable no-underscore-dangle */
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import combinedReducers from './reducers';

export const reduxStore = (initialState = {}) => {
  return createStore(combinedReducers, initialState, applyMiddleware(thunk, logger));
};
