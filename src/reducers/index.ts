import { combineReducers } from 'redux';
import questions from './questions';

const reducers = {
	questions,
};

export default combineReducers(reducers);
