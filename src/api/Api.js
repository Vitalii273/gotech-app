import axios from "./axios";

export const getInitialValues= async () => axios.get(`/initialValues`);
export const getAdditionalQuestion= async (id) => axios.get(`/${id}`);
export const getFeedback= async () => axios.get(`/feedback`);
export const getLanguages= async () => axios.get(`/languages`);
