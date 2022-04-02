import {useDispatch} from "react-redux";
import {getFeedbackAction, getLanguagesAction} from "../actions";

export const useMain = () => {
    const dispatch = useDispatch();
    return {
        mainControl: {
            getLanguages: () => dispatch(getLanguagesAction()),
            getFeedback: () => dispatch(getFeedbackAction()),
        }
    }
}
