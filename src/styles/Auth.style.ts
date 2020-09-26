import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: var(--spacing) auto;

  width: 380px;
  background: var(--white);
  border-radius: var(--border-radius);
  border: 2px solid var(--primary);
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  > * {
    margin-top: 1rem;
  }

  input {
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.8rem;
    border: 1px solid var(--primary);
  }

  select {
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    width: 210px;
    font-size: 0.8rem;
    border: 1px solid var(--primary);
    overflow: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .btn__auth {
    cursor: pointer;
    background: linear-gradient(180deg, var(--white), #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
`;
