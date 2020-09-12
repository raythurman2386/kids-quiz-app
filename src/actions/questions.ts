import { shuffleArray } from '../utils';
import axios from 'axios';
import { Question, Difficulty } from '../types';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export const getQuestions = (amount: number, diff: Difficulty) => (
	dispatch: any
) => {
	// const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${diff}&type=multiple`;

	const endpoint = `http://localhost:3333/questions`;

	axios
		.get(endpoint)
		.then((res) => {
			dispatch({
				type: GET_QUESTIONS,
				payload: res.data.map((question: Question) => ({
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
