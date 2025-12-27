import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import store from "./store";
import App from "./App";
// Replace BrowserRouter import with HashRouter
import { HashRouter } from "react-router-dom";
import { AlertProvider } from "./component/AlertContext";

const theme = createTheme();

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    {/* Wrap the application with HashRouter for mobile routing support */}
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AlertProvider>
            <App />
          </AlertProvider>
        </Provider>
      </ThemeProvider>
    </HashRouter>
  </>,
);
