import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_START,
} from '../actions/user';

const initialState = {
  isLoggedIn: false,
  jwt: '',
  user: {
    id: null,
    username: '',
    email: '',
    role: '',
    provider: '',
  },
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_USER_START:
    case REGISTER_USER_START:
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
    default:
      return state;
  }
}
