import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAdditionalQuestion, getDescription, getFeedback, getLanguages,} from "../api/Api";

export const getLanguagesAction = createAsyncThunk(
    'languages',
    async () => {
        try {
            const {data} = await getLanguages();
            return data
        } catch (error) {
            console.log(error)
        }
    }
);

export const getDescriptionAction = createAsyncThunk(
    'description',
    async () => {
        try {
            const {data} = await getDescription();
            return data
        } catch (error) {
            console.log(error)
        }
    }
);

export const getFeedbackAction = createAsyncThunk(
    'feedback',
    async () => {
        try {
            const {data} = await getFeedback();
            return data
        } catch (error) {
            console.log(error)
        }
    }
);

export const getAdditionalQuestionAction = createAsyncThunk(
    'additional',
    async (id) => {
        try {
            const {data} = await getAdditionalQuestion(id);
            return data
        } catch (error) {
            console.log(error)
        }
    }
);
