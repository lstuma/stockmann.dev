import { AiFillGithub, AiFillMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href="mailto:g.lstuma@gmail.com" className="footer-item">
                <AiFillMail className='icon-sm' />
                g.lstuma@gmail.com
            </a>
            <a href="https://github.com/lstuma" className="footer-item">
                <AiFillGithub className='icon-sm' />
                lstuma
            </a>
        </footer>
        )
}

export default Footer