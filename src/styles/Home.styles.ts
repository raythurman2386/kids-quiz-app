import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--spacing);

  > * {
    margin-top: var(--spacing);
  }

  > p {
    color: var(--white);
  }

  .score {
    color: var(--white);
    font-size: 2rem;
    margin: 0;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, var(--white), #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
