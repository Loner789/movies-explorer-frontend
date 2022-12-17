// IMPORTS:
import './BurgerPopup.css';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

// BURGER-POPUP COMPONENT:
function BurgerPopup(props) {
  // Constants:
  const { isOpen, onClose } = props;

  // Effects:
  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  // Functions:
  const setActive = ({ isActive }) =>
    `burger-popup__nav-link ${isActive ? 'burger-popup__nav-link_active' : ''}`;

  return (
    <div className={`burger-popup ${isOpen ? 'burger-popup_opened' : ''}`}>
      <div className='burger-popup__container'>
        <button
          type='button'
          className='burger-popup__close-button'
          aria-label='Кнопка закрытия.'
          onClick={onClose}
        />
        <div className='burger-popup__links-wrapper'>
          <ul className='burger-popup__nav-links'>
            <li>
              <NavLink to='/' className={setActive} onClick={onClose}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to='/movies' className={setActive} onClick={onClose}>
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to='/saved-movies' className={setActive} onClick={onClose}>
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <Link
            to='/profile'
            className='burger-popup__profile-link'
            aria-label='Профиль.'
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}

export default BurgerPopup;
