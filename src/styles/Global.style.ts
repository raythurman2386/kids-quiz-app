import { createGlobalStyle } from 'styled-components';
import BGImage from '../images/kidspace.jpg';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Catamaran', sans-serif;
}
html {
	line-height: 1.15; 
  -webkit-text-size-adjust: 100%;
  height: 100%;
}

body {
  margin: 0;
  background-image: url(${BGImage});
  // background-image: url(https://kyber.io/orz/src/1334165999292471.png)
  background-size: cover;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}
`;
