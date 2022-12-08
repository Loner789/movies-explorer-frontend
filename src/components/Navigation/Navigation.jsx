// IMPORTS:
import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

// NAVIGATION COMPONENT:
function Navigation() {
  return (
    <><ul className='navigation'>
      <li>
        <Link
          className='navigation__link'
          to='/movies'
        >
          Фильмы
        </Link>
      </li>
      <li>
        <Link className='navigation__link' to='/saved-movies'>
          Сохранённые фильмы
        </Link>
      </li>
      <li>
        <Link
          className='navigation__link navigation__link_type_profile'
          to='/profile'
        ></Link>
      </li>
    </ul><button type='button' className='navigation-burger-button' aria-label='Меню.'></button></>
  );
}

export default Navigation;
