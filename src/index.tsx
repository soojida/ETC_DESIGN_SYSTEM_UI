// lib
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// style
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "src/styles/GlobalStyle";
import theme from "src/styles/theme";

// components
import App from "./App";

// font
import { GlobalFont } from "src/styles/GlobalFont";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
