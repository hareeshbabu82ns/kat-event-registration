import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from "@chakra-ui/react"

const customTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  colors: {
    brand: {
      "a400": "#050c14",
      "a300": "#091523",
      "a200": "#0e1e33",
      "a100": "#132844",
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  }
})
// console.log(theme)

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme} resetCSS>
      <ColorModeScript initialColorMode="dark" />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
