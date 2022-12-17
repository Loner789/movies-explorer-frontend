// IMPORTS:
import './NavTab.css';
import React from 'react';
import { Link } from 'react-router-dom';

// NAV-TAB COMPONENT:
function NavTab() {
  return (
    <ul className='nav-tab'>
      <li>
        <Link className='nav-tab__link' to='/signup'>
          Регистрация
        </Link>
      </li>
      <li>
        <Link
          className='nav-tab__link nav-tab__link_type_login'
          to='/signin'
        >
          Войти
        </Link>
      </li>
    </ul>
  );
}

export default NavTab;
