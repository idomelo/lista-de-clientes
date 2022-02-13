import React from 'react'
import ReactDOM from 'react-dom'

import Home from './pages/Home'

import './index.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
    <Routes>

      <Route path="/" element={ <Home /> } />

    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  
  document.getElementById('root')
)

