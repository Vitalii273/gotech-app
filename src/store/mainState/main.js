import {createSlice} from '@reduxjs/toolkit';
import {getFeedbackAction, getInitialValuesAction, getLanguagesAction} from '../actions';

const initialState = {
    initialValues: {
        answer: "",
        javaScript: false,
        typeScript: false,
        coffeeScript: false,
        easy: false,
        normal: false,
        hard: false,
        other: false,
        selectedOption: "",
    },
    languages: null,
    additional: null,
    feedback: null,
    isLoading: false,
}

const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    extraReducers: {
        [getInitialValuesAction.fulfilled]: (slice, {payload}) => {
            slice.isLoading = false;
            if (payload) {
                slice.initialValues = payload;
            }
        },
        [getInitialValuesAction.pending]: (slice) => {
            slice.isLoading = true;
        },
        [getLanguagesAction.fulfilled]: (slice, {payload}) => {
            if (payload) {
                slice.languages = payload;
            }
        },
        [getFeedbackAction.fulfilled]: (slice, {payload}) => {
            if (payload) {
                slice.feedback = payload;
            }
        },
    }
})

export default mainSlice.reducer
