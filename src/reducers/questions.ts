import {
	GET_QUESTIONS_START,
	GET_QUESTIONS_SUCCESS,
	GET_QUESTIONS_FAILED,
} from '../actions/questions';

const initialState = {
	isLoading: false,
	questions: [],
	error: '',
};

export default function (state = initialState, action: any) {
	switch (action.type) {
		case GET_QUESTIONS_START:
			return {
				...state,
				questions: [],
				isLoading: true,
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
		default:
			return state;
	}
}
