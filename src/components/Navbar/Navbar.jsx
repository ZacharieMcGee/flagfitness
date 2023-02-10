import { useState } from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';

import './Navbar.css'
import LogoLg from '../../assets/logo-lg.png'
import LogoSm from '../../assets/logo-sm.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className='navbar-flex'>
        <div className='navbar-flex_logo'>
          <img className='navbar-flex_logo-img' src={LogoSm} alt='logo' />
        </div>

        <button
          type='button'
          className='navbar-flex_menu-btn'
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenuAlt3 size={20}/>  
        </button>

        { showMenu &&
          <nav className='navbar-flex_links'>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}exercises`}
              onClick={() => setShowMenu(!showMenu)}
            >
              EXERCISES
            </Link>
            <div className='divider'></div>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}bmi`}
              onClick={() => setShowMenu(!showMenu)}
            >
              BMI
            </Link>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}bmr`}
              onClick={() => setShowMenu(!showMenu)}
            >
              BMR
            </Link>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}bfp`}
              onClick={() => setShowMenu(!showMenu)}
            >
              BFP
            </Link>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}ibw`}
              onClick={() => setShowMenu(!showMenu)}
            >
              IBW
            </Link>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}whr`}
              onClick={() => setShowMenu(!showMenu)}
            >
              WHR
            </Link>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}absi`}
              onClick={() => setShowMenu(!showMenu)}
            >
              ABSI
            </Link>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}tdee`}
              onClick={() => setShowMenu(!showMenu)}
            >
              TDEE
            </Link>
            <div className='divider'></div>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}tdee`}
              onClick={() => setShowMenu(!showMenu)}
            >
              Help
            </Link>
            <Link 
              className='navbar-flex_links-link' 
              to={`${import.meta.env.BASE_URL}tdee`}
              onClick={() => setShowMenu(!showMenu)}
            >
              Contact
            </Link>
          </nav>
        
        }
      </div>


    </div>
  )
}

export default Navbar