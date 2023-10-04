import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ about: string }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.about}, sans-serif;
  }

  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
