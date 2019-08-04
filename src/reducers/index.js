/*jshint esversion: 8 */

import { combineReducers } from 'redux';

import { reducer as picturesReducer } from './pictures.js';

export const rootReducer = combineReducers({
    pictures: picturesReducer,
});