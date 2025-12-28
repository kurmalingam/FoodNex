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
import customTheme from "./component/theme";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: customTheme.colors.primary.main,
      dark: customTheme.colors.primary.dark,
      light: customTheme.colors.primary.light,
    },
    secondary: {
      main: customTheme.colors.secondary.main,
      dark: customTheme.colors.secondary.dark,
      light: customTheme.colors.secondary.light,
    },
    background: {
      default: customTheme.colors.neutral.offWhite,
      paper: customTheme.colors.neutral.white,
    },
    text: {
      primary: customTheme.colors.neutral.charcoal,
      secondary: customTheme.colors.neutral.gray,
    },
  },
  typography: {
    fontFamily: customTheme.typography.fontFamily.primary,
  },
  shape: {
    borderRadius: 8,
  },
  // Add custom theme properties to make them available in makeStyles
  colors: customTheme.colors,
  spacing: customTheme.spacing,
  shadows: customTheme.shadows,
  borderRadius: customTheme.borderRadius,
  transitions: customTheme.transitions,
  customTypography: customTheme.typography,
});

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
