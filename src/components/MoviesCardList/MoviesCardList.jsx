// IMPORTS:
import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MOVIE_CARD_IMAGE_URL } from '../../utils/constants';

// MOVIES-CARDLIST COMPONENT:
function MoviesCardList(props) {
  // Constants:
  const { movies, currentPath, moviesAmount, onMovieLike, onMovieDelete } =
    props;

  // Functions:
  function calculateDuration(movie) {
    return parseInt(movie.duration / 60) > 0
      ? `${parseInt(movie.duration / 60)}ч ${parseInt(movie.duration % 60)}м`
      : `${parseInt(movie.duration % 60)}м`;
  }

  return (
    <section className='movies-cardlist' aria-label='Блок с фильмами.'>
      <ul className='movies-cardlist__container'>
        {movies &&
          movies.map((movie) => {
            return (
              <MoviesCard
                key={currentPath === '/movies' ? movie.id : movie._id}
                _id={currentPath === '/movies' ? movie.id : movie._id}
                movieId={currentPath === '/movies' ? movie.id : movie._id}
                trailerLink={movie.trailerLink}
                image={
                  currentPath === '/movies'
                    ? `${MOVIE_CARD_IMAGE_URL}${movie.image.url}`
                    : movie.image
                }
                nameRU={movie.nameRU}
                nameEN={movie.nameEN}
                thumbnail={
                  currentPath === '/movies'
                    ? `${MOVIE_CARD_IMAGE_URL}${movie.image.formats.thumbnail.url}`
                    : movie.thumbnail
                }
                country={movie.country || 'unknown'}
                year={movie.year || 'unknown'}
                description={movie.description || 'unknown'}
                director={movie.director || 'unknown'}
                duration={movie.duration}
                durationForCard={calculateDuration(movie)}
                isLiked={movie.isLiked}
                currentPath={currentPath}
                moviesAmount={moviesAmount}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
                index={movies.indexOf(movie)}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
