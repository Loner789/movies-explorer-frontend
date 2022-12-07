// IMPORTS:
import './MoviesCard.css';
import React from 'react';
import { Link } from 'react-router-dom';

// MOVIES-CARDLIST COMPONENT:
function MoviesCard(props) {
  // Constants:
  const { trailerLink, image, nameRU, movieId, duration } = props;

  return (
    <li className='movies-card'>
      <Link
        to={{ pathname: trailerLink }}
        target='_blank'
        className='movies-card__trailer-link'
      >
        <img
          src={image}
          alt={nameRU}
          className='movies-card__image'
          id={movieId}
        />
      </Link>
      <div className='movies-card__info-wrapper'>
        <h3 className='movies-card__name'>{nameRU}</h3>
        <button
          type='button'
          className='movies-card__like-button'
          aria-label='Кнопка лайка.'
        ></button>
      </div>
      <p className='movies-card__duration'>{duration}</p>

      {/* <button
        type='button'
        className=''
        aria-label='Удалить из сохраненных.'
      ></button> */}
    </li>
  );
}

export default MoviesCard;
