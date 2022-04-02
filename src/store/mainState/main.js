import {createSlice} from '@reduxjs/toolkit';
import {getFeedbackAction, getLanguagesAction} from '../actions';

const initialState = {
    languages: {
        "id": "languages",
        "title": "What language is your favorite?",
        "questions": [
            {
                "id": "javaScript",
                "label": "JavaScript"
            },
            {
                "id": "typeScript",
                "label": "TypeScript"
            },
            {
                "id": "coffeeScript",
                "label": "CoffeeScript"
            }
        ]
    },
    feedback: {
        id: "feedback",
        title: "How was the assigment?",
        questions: [
            {
                "id": "easy",
                "label": "Easy"
            },
            {
                "id": "normal",
                "label": "Normal"
            },
            {
                "id": "hard",
                "label": "Hard"
            },
            {
                "id": "other",
                "label": "Other"
            }
        ]
    },
    additional: null,
    isLoading: false,
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
        [getFeedbackAction.pending]: (slice) => {
            slice.isLoading = true;
        },
        [getFeedbackAction.fulfilled]: (slice, {payload}) => {
            slice.isLoading = false;
            if (payload) {
                slice.feedback = payload;
            }
        },
    }
})

export default mainSlice.reducer
