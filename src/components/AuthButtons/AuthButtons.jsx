// IMPORTS:
import './AuthButtons.css';
import React from 'react';
import { Link } from 'react-router-dom';

// AUTH-BUTTONS COMPONENT:
function AuthButtons(props) {
  // Constants:
  const { buttonText, buttonCaption, link, linkText, isValid, isLoading } = props;

  return (
    <div className='auth-buttons'>
      <button
        type='submit'
        className='auth-buttons__button auth-buttons__button_type_submit'
        disabled={!isValid || isLoading}
      >
        {buttonText}
      </button>
      <div className='auth-buttons__link-wrapper'>
        <p className='auth-buttons__link-caption'>{buttonCaption}</p>
        <Link
          to={link}
          className='auth-buttons__button auth-buttons__button_type_link'
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default AuthButtons;
