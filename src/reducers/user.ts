import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from '../actions/user';

const initialState = {
  isLoggedIn: false,
  jwt: '',
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
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        jwt: '',
      };
    default:
      return state;
  }
}
