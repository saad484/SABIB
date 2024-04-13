import React, { useState, useEffect } from 'react';
import Link from '../Link/Link';
import Logo from '../../../assets/img/sabib.png'; 
import './Nav.css'; 

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggledNav, setToggledNav] = useState(false);

  const toggleNav = () => {
    setToggledNav(!toggledNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newNavClass = window.scrollY >= 200 ? 'scrolled' : '';
      setNavClass(newNavClass);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-md navbar-light bg-light ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <img src={Logo} className='logo-img' alt='logo' /> {/* Apply custom CSS class for logo */}
        </a>
        <button
          className={`navbar-toggler ${toggledNav ? 'collapsed' : ''}`}
          type='button'
          aria-expanded={toggledNav ? 'true' : 'false'}
          aria-label='Toggle navigation'
          onClick={toggleNav}
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className={`collapse navbar-collapse ${toggledNav ? 'show' : ''}`}>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link target='home' offset={-120} classes='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='about' classes='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='blog' classes='nav-link'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='Login' classes='nav-link'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
