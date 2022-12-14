// IMPORTS:
import './AuthPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

// AUTH-PAGE COMPONENT:
function AuthPage(props) {
  // Constants:
  const { pageTitle, formName, onSubmit, children } = props;

  return (
    <main className='auth-page'>
      <div className='auth-page__container'>
        <div className='auth-page__greeting'>
          <Link to='/' target='blank'>
            <img
              src={logo}
              alt='Логотип.'
              className='auth-page__greeting-logo'
            />
          </Link>
          <h2 className='auth-page__greeting-title'>{pageTitle}</h2>
        </div>
        <form
          className='auth-page__form'
          name={formName}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
        </form>
      </div>
    </main>
  );
}

export default AuthPage;
