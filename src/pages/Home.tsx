import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/loader/Loading';
import QuestionCard from '../components/cards/QuestionCard';
import { getQuestions, updateQuestionNumber } from '../actions/questions';
import { HomeProps, Difficulty } from '../types';
import {
  setGameState,
  resetGame,
  updateScore,
  updateUserAnswers,
} from '../actions/game';
// Styles
import { Wrapper } from '../styles/Home.styles';

const TOTAL_QUESTIONS = 10;

const Home: React.FC<HomeProps> = ({
  questions,
  getQuestions,
  isLoading,
  isGameOver,
  setGameState,
  score,
  updateScore,
  questionNumber,
  resetGame,
  userAnswers,
  updateUserAnswers,
  updateQuestionNumber,
}) => {
  const startQuiz = async () => {
    await getQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    await resetGame();
    await updateQuestionNumber(0);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isGameOver) {
      // Get the user answer
      const answer = e.currentTarget.value;
      // Check the value against correct answer
      const correct = questions[questionNumber].correct_answer === answer;
      // Add score if correct
      if (correct) updateScore();
      // Save answer in the array for user answers
      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        correct,
        correctAnswer: questions[questionNumber].correct_answer,
      };

      updateUserAnswers(answerObject);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = questionNumber + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameState(true);
    } else {
      updateQuestionNumber(nextQuestion);
    }
  };

  return (
    <Wrapper>
      {!isGameOver ? <p className='score'>Score: {score}</p> : null}
      {isLoading && <Loading height={100} width={100} />}
      {!isLoading && !isGameOver && (
        <QuestionCard
          questionNum={questionNumber + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[questionNumber].question}
          answers={questions[questionNumber].answers}
          userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
          callback={checkAnswer}
        />
      )}
      {isGameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className='start' onClick={startQuiz}>
          Start
        </button>
      ) : null}
      {!isGameOver &&
        !isLoading &&
        userAnswers.length === questionNumber + 1 &&
        questionNumber !== TOTAL_QUESTIONS - 1 && (
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
  isGameOver: state.game.isGameOver,
  score: state.game.score,
  questionNumber: state.questions.questionNumber,
  userAnswers: state.game.userAnswers,
});

export default connect(mapStateToProps, {
  getQuestions,
  setGameState,
  resetGame,
  updateScore,
  updateUserAnswers,
  updateQuestionNumber,
})(Home);
