import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: var(--purple-gradient);

  h1 {
    font-family: Fascinate Inline, sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    filter: drop-shadow(2px 2px #0085a3);
    font-size: 30px;
    font-weight: 400;
    margin: 20px;
  }

  nav {
    display: flex;

    a {
      color: white;
      text-decoration: none;
    }

    > a {
      margin-right: 15px;
    }
  }
`;
