import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from "@chakra-ui/react"

const mode = (light, dark) =>
  (props) => props.colorMode === 'dark' ? dark : light

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
  },
  styles: {
    global: (props) => {
      const bg = mode('white', 'gray.800')(props)
      const color = mode("gray.800", "whiteAlpha.900")(props)
      const bgHover = mode("gray.400", "whiteAlpha.400")(props)

      return {
        ".rdate-picker": {
          color: mode("gray.800", "whiteAlpha.900")(props),
          '.react-datepicker, .react-datepicker__header, .react-datepicker__time': {
            bg
          },
          '.react-datepicker__day-name, .react-datepicker__day, .react-datepicker__current-month, .react-datepicker-time__header, .react-datepicker-year-header, .react-datepicker__time': {
            color
          },
          '.react-datepicker__day:hover, .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover': {
            bg: bgHover
          },
        }
      }
    }
  }
})
// console.log(customTheme)

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
