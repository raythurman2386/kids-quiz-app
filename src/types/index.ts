export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

export type HomeProps = {
	questions: any;
	getQuestions: any;
};

export type QuestionCardProps = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNum: number;
	totalQuestions: number;
};

export type Question = {
	correct_answer: string;
	incorrect_answers: string[];
	question: string;
};

export enum Difficulty {
	EASY = 'easy',
	MEDIUM = 'medium',
	HARD = 'hard',
}
