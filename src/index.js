import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, theme, CSSReset, ColorModeProvider } from '@chakra-ui/core';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    current: 'dark',
  }
}
// console.log(theme)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
