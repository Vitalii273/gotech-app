import {createSlice} from '@reduxjs/toolkit';
import {getAdditionalQuestionAction, getDescriptionAction, getFeedbackAction, getLanguagesAction} from '../actions';

const initialState = {
    languages: null,
    feedback: null,
    additional: null,
    isLoading: false,
    description: null,
}

const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    extraReducers: {
        [getLanguagesAction.pending]: (slice) => {
            slice.isLoading = true;
        },
        [getLanguagesAction.fulfilled]: (slice, {payload}) => {
            slice.isLoading = false;
            if (payload) {
                slice.languages = payload;
            }
        },
        [getDescriptionAction.pending]: (slice) => {
            slice.isLoading = true;
        },
        [getDescriptionAction.fulfilled]: (slice, {payload}) => {
            slice.isLoading = false;
            if (payload) {
                slice.description = payload;
            }
        },
        [getFeedbackAction.pending]: (slice) => {
            slice.isLoading = true;
        },
        [getFeedbackAction.fulfilled]: (slice, {payload}) => {
            slice.isLoading = false;
            if (payload) {
                slice.feedback = payload;
            }
        },
        [getAdditionalQuestionAction.pending]: (slice) => {
            slice.isLoading = true;
        },
        [getAdditionalQuestionAction.fulfilled]: (slice, {payload}) => {
            slice.isLoading = false;
            if (payload) {
                slice.additional = payload;
            }
        },
    }
})

export default mainSlice.reducer
