import React from "react";
import theme from "./constants/theme";
import Meta from "./components/Meta";
import AlpacaGenerator from "./components/AlpacaGenerator";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <AlpacaGenerator />
    </ThemeProvider>
  );
}

export default App;
