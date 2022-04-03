import {useDispatch} from "react-redux";
import {getAdditionalQuestionAction, getFeedbackAction, getLanguagesAction} from "../actions";

export const useMain = () => {
    const dispatch = useDispatch();
    return {
        mainControl: {
            getLanguages: () => dispatch(getLanguagesAction()),
            getFeedback: () => dispatch(getFeedbackAction()),
            getAdditional: (id) => dispatch(getAdditionalQuestionAction(id)),
        }
    }
}
