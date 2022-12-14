// IMPORTS:
import './ErrorMessage.css';
import React from 'react';

// ERROR-MESSAGE COMPONENT:
function ErrorMessage(props) {
  // Constants:
  const { errorMessage } = props;
  const errorMessageClassName = `error-message ${
    !errorMessage ? 'message_hidden' : ''
  }`;

  return (
    <p className={errorMessageClassName}>
      {errorMessage ? errorMessage : ''}
    </p>
  );
}

export default ErrorMessage;
