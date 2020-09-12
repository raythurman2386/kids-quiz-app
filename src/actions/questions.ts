import { shuffleArray } from '../utils';
import axios from 'axios';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

export const getQuestions = () => (dispatch: any) => {
	const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;

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
