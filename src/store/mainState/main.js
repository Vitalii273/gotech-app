import {createSlice} from '@reduxjs/toolkit';
import {getFeedbackAction, getLanguagesAction} from '../actions';

const initialState = {
    initialValues: {
        answer: "",
        javaScript: false,
        typeScript: false,
        coffeeScript: false,
        easy: false,
        normal: false,
        hard: false,
        other: false
    },
    languages: null,
    additional: null,
    feedback: null,
}

const mainSlice = createSlice({
    name: 'main',
    initialState: initialState,
    extraReducers: {
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
