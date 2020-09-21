import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
} from '../actions/user';

const initialState = {
  isLoggedIn: false,
  jwt: '',
  message: '',
  user: {
    id: null,
    username: '',
    email: '',
    role: '',
  },
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoggedIn: false,
        message: '',
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        jwt: action.payload.jwt,
        message: action.payload.message,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        jwt: '',
        message: action.payload.message,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        jwt: '',
        message: '',
        user: {
          id: null,
          username: '',
          email: '',
          role: '',
        },
      };
    default:
      return state;
  }
}
