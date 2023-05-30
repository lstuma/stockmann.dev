// imports
import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'


import './components/darktheme.css'
import './components/lighttheme.css'
var theme = 0

function toggleTheme() {
  themeStylesheets.forEach((stylesheet) => stylesheet.disabled = true)
  theme = ++theme%2
  themeStylesheets[theme].disabled = false
}

var themeStylesheets = []

function App() {
  useEffect(() => {
    themeStylesheets.push(document.styleSheets[document.styleSheets.length-1])
    themeStylesheets.push(document.styleSheets[document.styleSheets.length-2])
    toggleTheme()
  })
  return (
    <Router>
      <div className="container">
        <Header toggleTheme={toggleTheme} currentTheme={theme}/>
        <Routes>
          <Route path='/' exact element={<Home />}/>
        </Routes>
        <Routes>
          <Route path='/blog/' exact element={<Blog />}/>
        </Routes>
        <Routes>
          <Route path='/blog/read/:article' element={<Article />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
