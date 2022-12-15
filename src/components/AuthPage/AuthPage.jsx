// IMPORTS:
import './AuthPage.css';
import React from 'react';
import Logo from '../Logo/Logo';

// AUTH-PAGE COMPONENT:
function AuthPage(props) {
  // Constants:
  const { pageTitle, formName, onSubmit, children } = props;

  return (
    <main className='auth-page'>
      <div className='auth-page__container'>
        <div className='auth-page__greeting'>
          <Logo />
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
