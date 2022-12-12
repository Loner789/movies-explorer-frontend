// IMPORTS:
import './Navigation.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// NAVIGATION COMPONENT:
function Navigation(props) {
  // Constants:
  const { onClick } = props;

  // Functions:
  const setActive = ({ isActive }) =>
    `navigation__link ${isActive && 'navigation__link_active'}`;

  return (
    <>
      <ul className='navigation'>
        <li>
          <NavLink to='/movies' className={setActive}>
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink to='/saved-movies' className={setActive}>
            Сохранённые фильмы
          </NavLink>
        </li>
        <li>
          <Link
            to='/profile'
            className='navigation__link navigation__link_type_profile'
            aria-label='Меню.'
          />
        </li>
      </ul>
      <button
        type='button'
        className={`navigation-burger-button`}
        aria-label='Меню.'
        onClick={onClick}
      ></button>
    </>
  );
}

export default Navigation;
