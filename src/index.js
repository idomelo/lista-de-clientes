import React from 'react'
import ReactDOM from 'react-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { deepPurple, pink } from '@mui/material/colors'

import { AuthProvider } from './state/auth'

import App from './App'
import './index.css'


const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[900],
    },
    secondary: {
      main: pink[500],
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

