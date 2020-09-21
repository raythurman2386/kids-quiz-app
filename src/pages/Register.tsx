import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useInput } from '../hooks/useInput';
import { Wrapper } from '../styles/Auth.style';

const Register = (props: any) => {
  const [username, handleUsername] = useInput('');
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');
  const [role, handleRole] = useInput('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = { username, email, password, role };
    axios
      .post(`http://localhost:3333/api/auth/register`, user)
      .then(res => {
        if (res.status === 201) {
          props.history.push('/login');
        }
      })
      .catch(err => setMessage(err.response.data.message));
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h3>Register Page</h3>
      {message && <p>{message}</p>}
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

export default withRouter(Register);
