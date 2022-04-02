import {useDispatch} from "react-redux";
import {getFeedbackAction, getInitialValuesAction, getLanguagesAction} from "../actions";

export const useMain = () => {
    const dispatch = useDispatch();
    return {
        mainControl: {
            getInitialValues: () => dispatch(getInitialValuesAction()),
            getLanguages: () => dispatch(getLanguagesAction()),
            getFeedback: () => dispatch(getFeedbackAction()),
        }
    }
}
