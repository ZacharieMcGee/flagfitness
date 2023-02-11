import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';


import './Navbar.css';
import LogoLg from '../../assets/logo-lg.png';
import LogoSm from '../../assets/logo-sm.png';
import useMediaQuery from '../../../utils/useMediaQuery';

const Navbar = () => {

  const baseUrl = import.meta.env.BASE_URL
  const [showMenu, setShowMenu] = useState(false)
  const isLargeDevice = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (isLargeDevice) {
      setShowMenu(false)
    }
  }, [isLargeDevice])

  const showMenuHandler = () => {
    if (!isLargeDevice) {
      setShowMenu(!showMenu)
    }
  }

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

        { showMenu  &&
          <>
            <nav className='navbar-flex_links'>
              <Link 
                className='navbar-flex_links-link' 
                to={`${baseUrl}`}
                onClick={showMenuHandler}
              >
                HOME
              </Link>
              
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
          </>
        }
      </div>


    </div>
  )
}

export default Navbar