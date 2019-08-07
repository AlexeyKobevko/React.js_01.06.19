/*jshint esversion: 8 */

import { createAction} from 'redux-actions';

export const loadStart = createAction('[Pictures] Load start');
export const dataRecieved = createAction('[Pictures] Data recieved');
export const errorOccured = createAction('[Pictures] Error occured');

export const load = () => (dispatch, getState) => {
    const state = getState();

    dispatch(loadStart());

    fetch(`http://localhost:8888/api/photos?page=${state.pictures.page}`, {
            headers: {
                'Content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`,
            },
    })
    .then(response => response.json())
    .then(data => {
        dispatch(dataRecieved(data));
    })
    .catch(error => {
        dispatch(errorOccured());
    });
};