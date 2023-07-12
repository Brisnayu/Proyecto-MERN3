import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider } from './context/userContext.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouteInit from './components/RouteInit/RouteInit.jsx'

import Hangman from './pages/Hangman.jsx'
import Tictactoe from './pages/Tictactoe.jsx'
import Sudoku from './pages/Sudoku.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
          {/* <RouteInit> */}
            <Route index element={<Home />} />
            <Route path="/hangman" element={<Hangman />} />
            <Route path="/tictactoe" element={<Tictactoe />} />
            <Route path="/sudoku" element={<Sudoku />} />
          {/* </RouteInit> */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
)
