import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f8f9fa;
  }

  h3 {
    margin-bottom: 20px;
  }
`;

export default GlobalStyles;