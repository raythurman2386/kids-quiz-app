import { AnswerObject } from '../types';

export const UPDATE_GAME_STATE = 'UPDATE_GAME_STATE';
export const RESET_GAME = 'RESET_GAME';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_USER_ANSWERS = 'UPDATE_USER_ANSWERS';

export const setGameState = (state: boolean) => (dispatch: any) => {
	dispatch({
		type: UPDATE_GAME_STATE,
		payload: state,
	});
};

export const resetGame = () => (dispatch: any) => {
	dispatch({
		type: RESET_GAME,
	});
};

export const updateScore = () => (dispatch: any) => {
	dispatch({
		type: UPDATE_SCORE,
	});
};

export const updateUserAnswers = (answer: AnswerObject) => (dispatch: any) => {
	dispatch({
		type: UPDATE_USER_ANSWERS,
		payload: answer,
	});
};
