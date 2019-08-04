/*jshint esversion: 8 */

import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './reducers';

const logger = store => next => action => {
    console.log('Action', action);
    console.log('Prev state', store.getstate());
    next(action);
    console.log('Next state', store.getstate());
};

export const store = createStore(
    rootReducer,
    applyMiddleware(logger),
    );