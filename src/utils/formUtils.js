export const validateForm = (values) => {
    let errors = {};
    if (values.languages === "") {
        errors.languages = "You must select a value.";
    }
    if (values.feedbacks === "") {
        errors.feedbacks = "You must select a value.";
    }
    return errors;
};
