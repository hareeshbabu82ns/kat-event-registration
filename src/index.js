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


const AppBase = (props) => {
  const currentTheme = useRecoilValue(themeMode)
  return (
    <StyletronProvider value={engine}>
      <BaseProvider
        theme={currentTheme === THEME.light ? lightTheme : darkTheme}>
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
