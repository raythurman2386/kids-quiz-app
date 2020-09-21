import React from 'react';
import { useInput } from '../hooks/useInput';
import { Wrapper } from '../styles/Auth.style';

const Register = () => {
  const [username, handleUsername] = useInput('');
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');
  const [role, handleRole] = useInput('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ username, email, password, role });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h1>Register Page</h1>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e: any) => handleUsername(e.target.value)}
      />
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e: any) => handleEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e: any) => handlePassword(e.target.value)}
      />
      <input
        type='text'
        placeholder='Role'
        value={role}
        onChange={(e: any) => handleRole(e.target.value)}
      />
      <button type='submit' className='btn__auth'>
        Register
      </button>
    </Wrapper>
  );
};

export default Register;
