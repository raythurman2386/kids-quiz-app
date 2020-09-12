import { shuffleArray } from '../utils';
import axios from 'axios';
import { Question, Difficulty } from '../types';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestions = (amount: number, diff: Difficulty) => (
	dispatch: any
) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${diff}&type=multiple`;

	axios
		.get(endpoint)
		.then((res) => {
			console.log(res.data.results, 'data coming in');
			dispatch({
				type: GET_QUESTIONS,
				payload: res.data.results.map((question: Question) => ({
					...question,
					answers: shuffleArray([
						...question.incorrect_answers,
						question.correct_answer,
					]),
				})),
			});
		})
		.catch((err) => dispatch(err));
};
