import { AiFillGithub, AiFillMail } from 'react-icons/ai'

import './footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="mailto:lstuma@proton.me" className="item">
                <AiFillMail className='icon-sm' />
                lstuma@proton.me
            </a>
            <a href="https://github.com/lstuma" className="item">
                <AiFillGithub className='icon-sm' />
                lstuma
            </a>
        </footer>
        )
}

export default Footer