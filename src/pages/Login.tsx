import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { Wrapper } from '../styles/Auth.style';
import { loginUser } from '../actions/user';

const Login = ({ loginUser, userMessage, history, isLoading }: any) => {
  const [username, handleUsername] = useInput('');
  const [password, handlePassword] = useInput('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = { username, password };
    loginUser(user);
    !isLoading && history.push('/');
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h3>Login Page</h3>
      {userMessage && <p>{userMessage}</p>}
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e: any) => handleUsername(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e: any) => handlePassword(e.target.value)}
      />
      <button type='submit' className='btn__auth'>
        Login
      </button>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  userMessage: state.user.message,
  isLoading: state.user.isLoading,
});

export default withRouter(connect(mapStateToProps, { loginUser })(Login));
