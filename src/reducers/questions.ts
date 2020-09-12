import { GET_QUESTIONS } from '../actions/questions';

const initialState = {
	questions: [],
};

export default function (state = initialState, action: any) {
	switch (action.type) {
		case GET_QUESTIONS:
			return {
				...state,
				questions: action.payload,
			};
		default:
			return state;
	}
}
