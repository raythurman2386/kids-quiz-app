import axios from 'axios';
export const LOGIN_USER_START = 'LOGIN_USER_START';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const REGISTER_USER_START = 'REGISTER_USER_START';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGOUT_USER = 'LOGOUT_USER';

export const loginUser = (
  user: { username: string; password: string },
  history: any
) => (dispatch: any) => {
  dispatch({ type: LOGIN_USER_START });
  const endpoint = process.env.REACT_APP_BASE_URL
    ? `${process.env.REACT_APP_BASE_URL}/auth/login`
    : 'http://localhost:3333/api/auth/login';
  axios
    .post(endpoint, user)
    .then(res => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data });
      localStorage.setItem('token', res.data.jwt);
      history.push('/');
    })
    .catch(err => {
      dispatch({ type: LOGIN_USER_FAIL, payload: err.response.data });
      history.push('/login');
    });
};

export const logoutUser = () => (dispatch: any) => {
  dispatch({ type: LOGOUT_USER });
};
