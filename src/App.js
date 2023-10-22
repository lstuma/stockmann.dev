// imports
import React, {useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cookies from 'universal-cookie'
// components
import Header from './components/Header'
import Footer from './components/Footer'

// pages
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import Article from './pages/article/Article'
import About from './pages/about/About'

import './lighttheme.css'
import './css/alt.css'


import './css/base.css'
import './css/standard.css'
import './css/buttons.css'
import './css/fonts.css'
import './css/borders.css'
import './css/icons.css'
import './css/loading.css'
var theme = 1


const cookies = new Cookies()
const html = document.querySelector('html')

function updateTheme() {
  if(theme===0 && !html.classList.contains('light')) html.classList.add('light')
  else if(theme===1 && html.classList.contains('light')) html.classList.remove('light')
}

function App() {
  if('theme' in cookies.getAll()) theme = Number(cookies.get('theme'))
  if(isNaN(theme)) theme = 0

  useEffect(updateTheme)

  return (
    <Router>
      <div className="container">
        <Header toggleTheme={() => {
          theme = ++theme%2
          updateTheme()
          cookies.set('theme', theme, {'maxAge':2147483647, 'path':'/', 'SamSite':'True'})
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
        <Routes>
          <Route path='/about/' exact element={<About />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
