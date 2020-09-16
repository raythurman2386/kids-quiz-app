import {
  GET_QUESTIONS_START,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILED,
  UPDATE_QUESTION_NUMBER,
} from '../actions/questions';
import { shuffleArray } from '../utils';

const initialState = {
  isLoading: false,
  questions: [],
  error: '',
  questionNumber: null,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case GET_QUESTIONS_START:
      return {
        ...state,
        questions: [],
        isLoading: true,
        questionNumber: null,
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: shuffleArray(action.payload),
        isLoading: false,
        questionNumber: 0,
      };
    case GET_QUESTIONS_FAILED:
      return {
        ...state,
        questions: [],
        isLoading: false,
        questionNumber: null,
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
