import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Calculator from './components/calculator/Calculator'

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={(
          <Calculator />
        )}
      />
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
