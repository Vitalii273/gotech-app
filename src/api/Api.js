import axios from "./axios";

export const getAdditionalQuestion= async (id) => axios.get(`/${id}`);
export const getFeedback= async () => axios.get(`/feedback`);
export const getLanguages= async () => axios.get(`/languages`);
export const getDescription= async () => axios.get(`/description`);
