import './App.css'
import { Examples } from './examples/Examples'
import { Nav } from './docs/Nav'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import { Overview } from './docs/Overview'
import React from 'react'

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React Modal Demo</h1>
            <Nav />
          </header>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/examples/" element={<Examples />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  )
}

export default App
