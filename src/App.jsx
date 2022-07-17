import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Dash, Gabinete } from './components'

const App = () => {
    return(
      <div className="App">
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dash/:channel" element={<Dash />} />
              <Route path="/dash" element={<Dash />} />
              <Route path="/gabinete" element={<Gabinete />} />
            </Routes>
        </Router>
      </div>
    );
}

export default App;
