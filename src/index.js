import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { log } from './utils/logger'

import {
  BaseProvider,
  createTheme, createDarkTheme
} from 'baseui';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { themeMode } from './state/globals'
import reportWebVitals from './reportWebVitals';

import { extendTheme } from '@chakra-ui/react';

const chakraDarkTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
})
const chakraLightTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
})

const engine = new Styletron()

const THEME = {
  light: 'light',
  dark: 'dark',
}
const primitives = {
  primaryFontFamily: 'Roboto',

}
const darkOverrides = {
  typography: {
    DisplayLarge: {
      fontFamily: 'Georgia',
    },
  },
  ...chakraDarkTheme,
  themeName: 'dark',
}
const lightOverrides = {
  typography: {
    DisplayLarge: {
      fontFamily: 'Georgia',
    },
  },
  ...chakraLightTheme,
  themeName: 'light',
}

const darkTheme = createDarkTheme(primitives, darkOverrides);
const lightTheme = createTheme(primitives, lightOverrides);

const breakpoints = {
  small: 769,
  medium: 1024,
  large: 1216,
  base: "0em",
  lg: "62em",
  md: "48em",
  sm: "30em",
  xl: "80em",
  'break-point-0': "0em",
  'break-point-1': "30em",
  'break-point-2': "48em",
  'break-point-3': "62em",
  'break-point-4': "80em",
  // ...chakraDarkTheme.breakpoints,
};

const ResponsiveTheme = Object.keys(breakpoints).reduce(
  (acc, key) => {
    const measure = breakpoints[key].toString().endsWith('em') ? '' : 'px'
    acc.mediaQuery[
      key
    ] = `@media screen and (min-width: ${breakpoints[key]}${measure})`;
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
  log({ data: theme })
  // console.log(chakraDarkTheme)

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
