// IMPORTS:
import './ButtonMore.css';
import React from 'react';

// BUTTON-MORE COMPONENT:
function ButtonMore(props) {
  // Constants:
  const { movies, moviesAmount, onClick } = props;

  return (
    <button
      type='button'
      className={`button-more ${
        movies.length <= moviesAmount ? 'button-more_hidden' : ''
      }`}
      onClick={onClick}
    >
      Ещё
    </button>
  );
}

export default ButtonMore;
