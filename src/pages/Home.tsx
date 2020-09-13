import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import QuestionCard from '../components/QuestionCard';
import { getQuestions } from '../actions/questions';
import { AnswerObject, HomeProps, Difficulty } from '../types';
// Styles
import { Wrapper } from '../styles/Home.styles';

const TOTAL_QUESTIONS = 10;

const Home: React.FC<HomeProps> = ({ questions, getQuestions, isLoading }) => {
	React.useEffect(() => {
		getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
	}, []);

	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startQuiz = async () => {
		setGameOver(false);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			// Get the user answer
			const answer = e.currentTarget.value;
			// Check the value against correct answer
			const correct = questions[number].correct_answer === answer;
			// Add score if correct
			if (correct) setScore((prev) => prev + 1);
			// Save answer in the array for user answers
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};

			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		const nextQuestion = number + 1;

		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return (
		<Wrapper>
			<h1>Kid Space</h1>
			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
				<button className='start' onClick={startQuiz}>
					Start
				</button>
			) : null}
			{!gameOver ? <p className='score'>Score: {score}</p> : null}
			{isLoading && (
				<Loader
					type='TailSpin'
					color='#FFF'
					height={100}
					width={100}
					timeout={3000} //3 secs
				/>
			)}
			{!isLoading && !gameOver && (
				<QuestionCard
					questionNum={number + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}
			{!gameOver &&
				!isLoading &&
				userAnswers.length === number + 1 &&
				number !== TOTAL_QUESTIONS - 1 && (
					<button className='next' onClick={nextQuestion}>
						Next Question
					</button>
				)}
		</Wrapper>
	);
};

const mapStateToProps = (state: any) => ({
	questions: state.questions.questions,
	isLoading: state.questions.isLoading,
});

export default connect(mapStateToProps, { getQuestions })(Home);
