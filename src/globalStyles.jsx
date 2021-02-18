import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Open Sans', sans-serif;
  }
  h1 {
    font-family: 'Vollkorn', serif;
  }

  html, body {
    overflow-x: hidden;
    /* background:#F5F5F5; */
  }
`;
export default GlobalStyle;