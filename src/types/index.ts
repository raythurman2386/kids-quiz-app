export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

export type HomeProps = {
  questions: any;
  getQuestions: any;
  isLoading: boolean;
  isGameOver: boolean;
  setGameState: any;
  score: number;
  updateScore: any;
  questionNumber: number;
  resetGame: any;
  userAnswers: AnswerObject[];
  updateUserAnswers: any;
  updateQuestionNumber: any;
};

export type NavProps = {
  isLoggedIn: boolean;
};

export type QuestionCardProps = {
  question: any;
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
