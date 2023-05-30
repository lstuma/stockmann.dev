// imports
import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useCookies } from 'react-cookie'

// components
import Header from './components/Header'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Blog from './pages/Blog'
import Article from './pages/Article'


import './components/darktheme.css'
import './components/lighttheme.css'
var theme = 1


function updateTheme() {
  for(let i = 0; i < themeStylesheets.length; i++) themeStylesheets[i].disabled = i!==theme
  themeStylesheets[theme].disabled = false
}

var themeStylesheets = []

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['theme']);
  if('theme' in cookies) theme = cookies['theme']
  useEffect(() => {
    themeStylesheets.push(document.styleSheets[document.styleSheets.length-1])
    themeStylesheets.push(document.styleSheets[document.styleSheets.length-2])
    updateTheme()
  })

  return (
    <Router>
      <div className="container">
        <Header toggleTheme={() => {
          theme = ++theme%2
          updateTheme()
          setCookie('theme', theme, {'maxAge':2147483647})
        }} currentTheme={theme}/>
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
