import axios from 'axios';
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (user: any) => (dispatch: any) => {
  dispatch({ type: LOGIN_USER_START });
  const endpoint = 'http://localhost:3333/api/auth/login';
  axios
    .post(endpoint, user)
    .then(res => dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: LOGIN_USER_FAIL, payload: err.response.data })
    );
};

export const logoutUser = () => (dispatch: any) => {
  dispatch({ type: LOGOUT_USER });
};
