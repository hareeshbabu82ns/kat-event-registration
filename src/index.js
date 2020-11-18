import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
  BaseProvider, styled,
  createTheme, createDarkTheme
} from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { themeMode } from './state/globals'
import reportWebVitals from './reportWebVitals';

const engine = new Styletron()

const THEME = {
  light: 'light',
  dark: 'dark',
}
const primitives = {
  primaryFontFamily: 'Roboto',

}
const overrides = {
  typography: {
    DisplayLarge: {
      fontFamily: 'Georgia',
    },
  },
}

const darkTheme = createDarkTheme(primitives, overrides);
const lightTheme = createTheme(primitives, overrides);

const breakpoints = {
  small: 769,
  medium: 1024,
  large: 1216,
};

const ResponsiveTheme = Object.keys(breakpoints).reduce(
  (acc, key) => {
    acc.mediaQuery[
      key
    ] = `@media screen and (min-width: ${breakpoints[key]}px)`;
    return acc;
  },
  {
    breakpoints,
    mediaQuery: {},
  },
);

const AppBase = () => {
  const currentTheme = useRecoilValue(themeMode)

  const currTheme = currentTheme === THEME.light ? lightTheme : darkTheme
  const theme = { ...currTheme, ...ResponsiveTheme };
  console.log(theme)

  // set the background color of the page
  const rootEle = document.getElementsByTagName('body')[0]
  rootEle.style.backgroundColor = theme.colors.backgroundSecondary
  rootEle.style.color = theme.colors.contentPrimary

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppBase />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
