/*jshint esversion: 8 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

// const logger = store => next => action => {
//     console.log('Action', action);
//     console.log('Prev state', store.getState());
//     next(action);
//     console.log('Next state', store.getState());
// };

export const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk),
    );