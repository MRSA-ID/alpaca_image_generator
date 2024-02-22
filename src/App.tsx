import React from "react";
import theme from "./constants/theme";
import "./App.css";
import Meta from "./components/Meta";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
    </ThemeProvider>
  );
}

export default App;
