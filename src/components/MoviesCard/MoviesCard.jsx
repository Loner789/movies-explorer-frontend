// IMPORTS:
import './MoviesCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';

// MOVIES-CARDLIST COMPONENT:
function MoviesCard(props) {
  // Constants:
  const {
    movieId,
    trailerLink,
    image,
    nameRU,
    durationForCard,
    currentPath,
    amountMovies,
    onMovieLike,
    onMovieDelete,
    isLiked,
    index,
  } = props;
  const screenWidth = useWindowWidth();
  const moviesPage = currentPath === '/movies';
  const movieLikeButtonClassName = `movies-card__button ${isLiked ? 'movies-card__like-button_active' : 'movies-card__like-button'} ${
    !moviesPage && screenWidth > 767 && 'movies-card__button_hidden'
  }`;
  const movieDeleteButtonClassName = `movies-card__button movies-card__delete-button ${
    moviesPage && 'movies-card__button_hidden'
  }`;

  // Functions:
  function handleLikeClick() {
    onMovieLike();
  }

  function handleDeleteClick() {
    onMovieDelete();
  }

  return (
    <li className={`movies-card ${index >= amountMovies && 'movie_hidden'}`}>
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
          className={movieLikeButtonClassName}
          aria-label='Кнопка лайка.'
          onClick={handleLikeClick}
        ></button>
        <button
          type='button'
          className={movieDeleteButtonClassName}
          aria-label='Кнопка удаления фильма.'
          onClick={handleDeleteClick}
        ></button>
      </div>
      <p className='movies-card__duration'>{durationForCard}</p>
    </li>
  );
}

export default MoviesCard;
