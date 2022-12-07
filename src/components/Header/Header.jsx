// IMPORTS:
import './Header.css';
import React from 'react';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import { Link, useLocation, Routes, Route } from 'react-router-dom';

// HEADER COMPONENT:
function Header() {
  // Constants
  const location = useLocation();
  const isVisible =
    location.pathname === '/' || 
    location.pathname === '/movies' ||
    location.pathname === '/saved-movies' ||
    location.pathname === '/profile';

  return isVisible ? (
    <header className='header'>
      <Link to='/' target='blank'>
        <img src={logo} alt='Логотип.' className='header__logo' />
      </Link>
      <div className='header__nav-wrapper'>
        <Routes>
          <Route path='/' element={<NavTab />} />
          <Route path='*' element={<Navigation />} />
        </Routes>
      </div>
    </header>
  ) : null;
}

export default Header;
