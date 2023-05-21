// imports
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Blog from './pages/Blog'


function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />}/>
        </Routes>
        <Routes>
          <Route path='/blog/' element={<Blog />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
