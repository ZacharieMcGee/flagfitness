import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';

import './Navbar.css';
import LogoLg from '../../assets/logo-lg.png';
import LogoSm from '../../assets/logo-sm.png';

const Navbar = () => {

  const baseUrl = import.meta.env.BASE_URL
  const [showMenu, setShowMenu] = useState(false)

  const showMenuHandler = () => (setShowMenu(!showMenu));

  return (
    <div className='navbar'>

      { showMenu &&
        <div 
          className='navbar-backdrop'
          onClick={showMenuHandler}  
        ></div>
      }

      <div className='navbar-flex'>

        <Link className='navbar-flex_logo' to={`${baseUrl}`}>
          <img className='navbar-flex_logo-img logo-lg' src={LogoLg} alt='logo' />
          <img className='navbar-flex_logo-img logo-sm' src={LogoSm} alt='logo' />
        </Link>

        <button
          type='button'
          className='navbar-flex_menu-btn'
          onClick={() => setShowMenu(!showMenu)}
        >
          <HiMenuAlt3 size={20}/>  
        </button>

        <nav className={
          showMenu 
          ? 'navbar-flex_links show-navbar'
          : 'navbar-flex_links hide-navbar'
        }>
          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}`}
            onClick={showMenuHandler}
          >
            HOME
          </Link>
          
          <div className='divider'></div>
          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}exercises`}
            onClick={showMenuHandler}
          >
            EXERCISES
          </Link>

          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}exercises`}
            onClick={showMenuHandler}
          >
            CALCULATORS
          </Link>
          
          {/* <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}bmi`}
            onClick={() => setShowMenu(!showMenu)}
          >
            BMI
          </Link>

          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}bmr`}
            onClick={() => setShowMenu(!showMenu)}
          >
            BMR
          </Link>

          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}bfp`}
            onClick={() => setShowMenu(!showMenu)}
          >
            BFP
          </Link>
          
          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}ibw`}
            onClick={() => setShowMenu(!showMenu)}
          >
            IBW
          </Link>

          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}whr`}
            onClick={() => setShowMenu(!showMenu)}
          >
            WHR
          </Link>

          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}absi`}
            onClick={() => setShowMenu(!showMenu)}
          >
            ABSI
          </Link>

          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}tdee`}
            onClick={() => setShowMenu(!showMenu)}
          >
            TDEE
          </Link> */}

          <div className='divider'></div>

          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}tdee`}
            onClick={showMenuHandler}
          >
            HELP
          </Link>

          <Link 
            className='navbar-flex_links-link' 
            to={`${baseUrl}tdee`}
            onClick={showMenuHandler}
          >
            CONTACT
          </Link>
        </nav>
      </div>


    </div>
  )
}

export default Navbar