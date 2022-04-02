import {createAsyncThunk} from "@reduxjs/toolkit";
import {getFeedback, getInitialValues, getLanguages,} from "../api/Api";

export const getInitialValuesAction = createAsyncThunk(
    'initialValues',
    async () => {
        try {
            const {data} = await getInitialValues();
            return data
        } catch (error) {
            console.log(error)
        }
    },
);

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
