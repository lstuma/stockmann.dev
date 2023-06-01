import { AiFillGithub, AiFillMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <a href="mailto:lstuma@proton.me" className="footer-item">
                <AiFillMail className='icon-sm' />
                lstuma@proton.me
            </a>
            <a href="https://github.com/lstuma" className="footer-item">
                <AiFillGithub className='icon-sm' />
                lstuma
            </a>
        </footer>
        )
}

export default Footer