import { Link } from 'react-router-dom'

import './Footer.css'
import LogoLg from '../../assets/logo-lg.png';
import { AiOutlineInstagram } from 'react-icons/ai'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { VscGithub } from 'react-icons/vsc'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <footer className='footer'>
      <div className='footer-flex'>
        <Link className='footer-flex_logo' to={`${baseUrl}`}>
          <img className='footer-flex_logo-img' src={LogoLg} alt='logo' />
        </Link>

        <div className='footer-icon'>
          <AiOutlineInstagram />
        </div>
        <div className='footer-icon'>
          <RiFacebookCircleLine />
        </div>
        <div className='footer-icon'>
          <VscGithub />
        </div>
        <div className='footer-icon'>
          <FiMail />
        </div>
      </div>

      <p> &copy; FlagFitness | All Rights Reserved</p>
    </footer>
  )
}

export default Footer