import { shuffleArray } from '../utils';

/*   Logic for grabbing the questions from the API   */
export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}

export const fetchQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
	// Double await because the first await is for the data
	// The second await is for changing the data to json
	const data = await (await fetch(endpoint)).json();
	return data.results.map((question: Question) => ({
		...question,
		answers: shuffleArray([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};
