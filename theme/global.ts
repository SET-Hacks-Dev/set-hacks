import { createGlobalStyle } from "styled-components";
import { rgba } from "polished";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100vh;
    scroll-behavior: smooth;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background-image: linear-gradient(${theme.colors.brand[200]}, ${
  theme.colors.brand[200]
}, transparent);
    background-repeat:no-repeat;
    background-size: 100% 70vh;
    background-color: ${theme.colors.white};
    color: ${theme.colors.brand[800]};
    font-family: ${theme.fonts.sans};
    font-size: ${theme.fontSizes.md};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.6;
    margin: 0;
    overflow-x: hidden;
    width: 100%;
  }

  ::selection {
    background-color: ${rgba(theme.colors.brand[400], 0.1)};
  }

  #root {
    min-height: 100vh;
  }

`;

export default GlobalStyle;
