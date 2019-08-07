/*jshint esversion: 9 */

import { handleActions } from 'redux-actions';

import { loadStart, dataRecieved, errorOccured } from 'actions/pictures';

const initialState = {
    loading: false,
    error: false,
    entries: [],
    page: 1,
};

export const reducer = handleActions({
    [loadStart]: (state) => {
        return {
            ...state,
            loading: true,
        };
    },
    [dataRecieved]: (state, action) => {
        const data = action.payload;
        return {
            ...state,
            entries: state.entries.concat(
                data.photos.map(photo =>
                    ({ id: photo._id, image: photo.image, likes: photo.likes.length, comments: photo.comments.length }))
            ),
            page: state.page + 1,
            loading: false,
        };
    },
    [errorOccured]: (state) => {
        return {
            ...state,
            loading: false,
            error: true,
        };
    }
}, initialState);