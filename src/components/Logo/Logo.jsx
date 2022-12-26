// IMPORTS:
import './Logo.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

// LOGO COMPONENT:
function Logo() {
  return (
    <Link to='/' target='blank'>
      <img src={logo} alt='Логотип.' className='logo' />
    </Link>
  );
}

export default Logo;
