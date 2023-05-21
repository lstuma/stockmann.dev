const Footer = () => {
    return (
        <footer>
            <a href="mailto:g.lstuma@gmail.com" className="footer-item">
                <img className="icon-sm" alt="[404]"src={process.env.PUBLIC_URL+"/img/envelope-white.svg"}/>
                g.lstuma@gmail.com
            </a>
            <a href="https://github.com/lstuma" className="footer-item">
                <img className="icon-sm" alt="[404]" src={process.env.PUBLIC_URL+"/img/github-mark-white.svg"}/>
                lstuma
            </a>
        </footer>
        )
}

export default Footer