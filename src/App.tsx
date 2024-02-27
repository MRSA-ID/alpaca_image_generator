import React, { useState } from "react";
import theme from "./constants/theme";
import Meta from "./components/Meta";
import AlpacaGenerator from "./components/AlpacaGenerator";
import { ThemeProvider } from "styled-components";

function App() {
  const [loading, SetLoading] = useState(true);
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    setTimeout(() => {
      loadingElement.style.display = "none";
      SetLoading(false);
    }, 2000);
  }
  return (
    <ThemeProvider theme={theme}>
      {!loading && (
        <>
          <Meta />
          <AlpacaGenerator />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
