// IMPORTS:
import './Header.css';
import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavTab from '../NavTab/NavTab';
import { Routes, Route } from 'react-router-dom';

// HEADER COMPONENT:
function Header(props) {
  // Constants:
  const { currentPath, onClick } = props;
  const isVisible =
    currentPath === '/' ||
    currentPath === '/movies' ||
    currentPath === '/saved-movies' ||
    currentPath === '/profile';

  return isVisible ? (
    <header className='header'>
      <Logo />
      <div className='header__nav-wrapper'>
        <Routes>
          <Route path='/' element={<NavTab />} />
          <Route path='*' element={<Navigation onClick={onClick} />} />
        </Routes>
      </div>
    </header>
  ) : null;
}

export default Header;
