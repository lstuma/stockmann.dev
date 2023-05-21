import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import './global.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' exact element={<p>Test</p>}/>
        </Routes>
        <Routes>
          <Route path='/blog/' element={<p>Blog Test</p>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
