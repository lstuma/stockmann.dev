import { Link } from 'react-router-dom'

const Header = ({username}) => {
    return (
        <header>
            <nav className="navbar">
                <Link to='/'>
                    <img alt="[404]" src={process.env.PUBLIC_URL+"/img/icon.svg"} className="icon-m" style={{marginLeft: 0}}/>
                    <span className="navbar-brand">stockmann.dev</span>
                </Link>
                <Link to='/blog/' className="navbar-item">blog</Link>
                <button style={{justifySelf: "end"}}>Subscribe!</button>
            </nav>
        </header>
    )
}

export default Header