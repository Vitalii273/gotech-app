import {useDispatch} from "react-redux";
import {getAdditionalQuestionAction, getDescriptionAction, getFeedbackAction, getLanguagesAction} from "../actions";

export const useMain = () => {
    const dispatch = useDispatch();
    return {
        mainControl: {
            getLanguages: () => dispatch(getLanguagesAction()),
            getDescribe: () => dispatch(getDescriptionAction()),
            getFeedback: () => dispatch(getFeedbackAction()),
            getAdditional: (id) => dispatch(getAdditionalQuestionAction(id)),
        }
    }
}
