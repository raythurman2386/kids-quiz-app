import axios from 'axios';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

export const getQuestions = async (amount: number, difficulty: Difficulty) => (
	dispatch: any
) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

	axios
		.get(endpoint)
		.then((res) => {
			dispatch({
				type: GET_QUESTIONS,
				payload: res.data,
			});
		})
		.catch((err) => dispatch(err.response.data, err.response.status));
};
