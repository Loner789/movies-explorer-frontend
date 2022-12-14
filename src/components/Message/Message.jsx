// IMPORTS:
import './Message.css';
import React from 'react';

// MESSAGE COMPONENT:
function Message(props) {
  // Constants:
  const {
    currentPath,
    isLoading,
    isProfileUpdated,
    message,
    movies = [],
    errorMessage,
  } = props;
  const moviesMessageClassName = `message ${
    (movies.length > 0 || isLoading) ? 'message_hidden' : ''
  }`;
  const profileMessageClassName = `message ${
    (!isProfileUpdated || errorMessage) ? 'message_hidden' : ''
  }`;

  return (
    <>
      {(currentPath === '/movies' || currentPath === '/saved-movies') && (
        <p className={moviesMessageClassName}>{message}</p>
      )}
      {currentPath === '/profile' && (
        <p className={profileMessageClassName}>{message}</p>
      )}
    </>
  );
}

export default Message;
