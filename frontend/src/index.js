import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import store from "./store";
import App from "./App";
// Replace BrowserRouter import with HashRouter
import { BrowserRouter } from "react-router-dom";
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
  shadows: [
    'none', // 0
    customTheme.shadows.sm, // 1
    customTheme.shadows.base, // 2
    customTheme.shadows.md, // 3
    customTheme.shadows.lg, // 4
    customTheme.shadows.xl, // 5
    customTheme.shadows.card, // 6
    customTheme.shadows.cardHover, // 7
    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // 8
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // 9
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 10
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 11
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 12
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 13
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 14
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 15
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 16
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 17
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 18
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 19
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 20
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 21
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 22
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 23
    '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // 24
  ],
  // Add custom theme properties to make them available in makeStyles
  colors: customTheme.colors,
  borderRadius: customTheme.borderRadius,
  transitions: customTheme.transitions,
  customTypography: customTheme.typography,
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    {/* Wrap the application with HashRouter for mobile routing support */}
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AlertProvider>
            <App />
          </AlertProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </>,
);
