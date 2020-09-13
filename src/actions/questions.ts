import { shuffleArray } from '../utils';
import axios from 'axios';
import { Question, Difficulty } from '../types';
export const GET_QUESTIONS_START = 'GET_QUESTIONS_START';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILED = 'GET_QUESTIONS_FAILED';
export const UPDATE_QUESTION_NUMBER = 'UPDATE_QUESTION_NUMBER';

export const getQuestions = (amount: number, diff: Difficulty) => (
	dispatch: any
) => {
	// const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${diff}&type=multiple`;

	const endpoint = `http://localhost:3333/questions`;
	dispatch({ type: GET_QUESTIONS_START });

	axios
		.get(endpoint)
		.then((res) => {
			dispatch({
				type: GET_QUESTIONS_SUCCESS,
				payload: res.data.map((question: Question) => ({
					...question,
					answers: shuffleArray([
						...question.incorrect_answers,
						question.correct_answer,
					]),
				})),
			});
		})
		.catch((err) =>
			dispatch({ type: GET_QUESTIONS_FAILED, payload: err.response })
		);
};

export const updateQuestionNumber = (number: number) => (dispatch: any) => {
	dispatch({
		type: UPDATE_QUESTION_NUMBER,
		payload: number,
	});
};
