import {
  UPDATE_GAME_STATE,
  RESET_GAME,
  UPDATE_SCORE,
  UPDATE_USER_ANSWERS,
} from '../actions/game'

const initialState = {
  isGameOver: true,
  userAnswers: [],
  score: 0,
  error: '',
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case UPDATE_GAME_STATE:
      return {
        ...state,
        isGameOver: action.payload,
      }
    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + 1,
      }
    case UPDATE_USER_ANSWERS:
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.payload],
      }
    case RESET_GAME:
      return {
        isGameOver: false,
        userAnswers: [],
        score: 0,
        error: '',
      }
    default:
      return state
  }
}
