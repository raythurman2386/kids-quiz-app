import { combineReducers } from 'redux'
import questions from './questions'
import game from './game'

const reducers = {
  questions,
  game,
}

export default combineReducers(reducers)
