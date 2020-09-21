import { combineReducers } from 'redux';
import questions from './questions';
import game from './game';
import user from './user';

const reducers = {
  questions,
  game,
  user,
};

export default combineReducers(reducers);
