import React from 'react';
import { useInput } from '../hooks/useInput';
import { Wrapper } from '../styles/Auth.style';

const Login = () => {
  const [username, handleUsername] = useInput('');
  const [password, handlePassword] = useInput('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h1>Login Page</h1>
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

export default Login;
