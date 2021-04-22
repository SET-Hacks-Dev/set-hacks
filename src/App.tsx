import { GlobalStyle, theme } from "./theme";

import { Base } from "./pages";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div id="app">
          <Base />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
