// IMPORTS:
import './BurgerPopup.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// BURGER-POPUP COMPONENT:
function BurgerPopup() {
  // Functions:
  const setActive = ({ isActive }) =>
    isActive ? 'burger-popup__nav-link_active' : 'burger-popup__nav-link';

  return (
    <div className='burger-popup'>
      <div className='burger-popup__container'>
        <button
          type='button'
          className='burger-popup__close-button'
          aria-label='Кнопка закрытия.'
        />
        <div className='burger-popup__links-wrapper'>
          <ul className='burger-popup__nav-links'>
            <li>
              <NavLink to='/' className={setActive}>
                Главная
              </NavLink>
            </li>
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
          </ul>
          <Link
            className='burger-popup__profile-link'
            to='/profile'
            aria-label='Профиль.'
          />
        </div>
      </div>
    </div>
  );
}

export default BurgerPopup;
