import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dash from './components/Dash';
import Adsense from './components/Adsense';

const App = () => {
    return(
      <div className="App">
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dash/:channel" element={<Dash />} />
              <Route path="/dash" element={<Dash />} />
              <Route path="/adsense" element={<Adsense />} />
            </Routes>
        </Router>
      </div>
    );
}

export default App;
