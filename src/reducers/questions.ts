import {
  GET_QUESTIONS_START,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILED,
  UPDATE_QUESTION_NUMBER,
} from '../actions/questions';

const initialState = {
  isLoading: false,
  questions: [],
  error: '',
  questionNumber: 0,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_QUESTIONS_START:
      return {
        ...state,
        questions: [],
        isLoading: true,
        questionNumber: 0,
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        isLoading: false,
      };
    case GET_QUESTIONS_FAILED:
      return {
        ...state,
        questions: [],
        isLoading: false,
        error: action.payload,
      };
    case UPDATE_QUESTION_NUMBER:
      return {
        ...state,
        questionNumber: action.payload,
      };
    default:
      return state;
  }
}
