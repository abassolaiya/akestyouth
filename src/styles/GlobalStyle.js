import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${(props) => props.theme.font};
    line-height: 1.6;
    color: ${(props) => props.theme.dark};
    background-color: #f5f5f5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
