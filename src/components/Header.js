import { Link } from 'react-router-dom'
import { FaSun } from 'react-icons/fa'
import { TbMoonFilled } from 'react-icons/tb'
import { useState } from 'react'

import './header.css'

const Header = ({username, currentTheme, toggleTheme}) => {
    const [theme, setTheme] = useState(currentTheme)
    return (
        <header>
            <Link to='/'>
                <img alt="[404]" src={process.env.PUBLIC_URL+"/img/icon.svg"} className="icon" style={{marginLeft: 0}}/>
            </Link>
            <div>
                <Link to='/' className="logo">stockmann.dev</Link>
                <Link to='/blog/' className="item">blog</Link>
                <Link to='/about/' className="item">whoami</Link>
                {theme===0?<FaSun className="icon-sm" onClick={() => {toggleTheme(); setTheme(1)}} />:<TbMoonFilled className="icon-sm" onClick={() => {toggleTheme(); setTheme(0)}} />}
            </div>
        </header>
    )
}

export default Header