import { Link } from 'react-router-dom'
import { FaSun } from 'react-icons/fa'
import { TbMoonFilled } from 'react-icons/tb'
import { useState } from 'react'

const Header = ({username, currentTheme, toggleTheme}) => {
    const [theme, setTheme] = useState(currentTheme)
    return (
        <header>
            <nav className="navbar">
                <Link to='/'>
                    <img alt="[404]" src={process.env.PUBLIC_URL+"/img/icon.svg"} className="icon-m" style={{marginLeft: 0}}/>
                    <span className="navbar-brand">stockmann.dev</span>
                </Link>
                <Link to='/blog/' className="navbar-item">blog</Link>
                {/*<button style={{justifySelf: "end"}}>Subscribe!</button>*/}
                {theme===0?<FaSun className="icon-sm" onClick={() => {toggleTheme(); setTheme(1)}} />:<TbMoonFilled className="icon-sm" onClick={() => {toggleTheme(); setTheme(0)}} />}
            </nav>
        </header>
    )
}

export default Header