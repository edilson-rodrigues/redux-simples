import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  body {
    margin: 0;
    padding: 0;  
    background-color: #102027;  
    font-family: 'Open Sans', sans-serif;  
    font-size: 30px;
    color: #fff; 
  }
  html, body {
    min-height:100vh;
  }  
`;

export default GlobalStyle;