// IMPORTS:
import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

// MOVIES-CARDLIST COMPONENT:
function MoviesCardList(props) {
  // Constants:
  const {
    movies,
    currentPath,
    moviesAmount,
    onMovieLike,
    onMovieDelete,
    isLiked,
  } = props;

  // Functions:
  function calculateDuration(movie) {
    return parseInt(movie.duration / 60) > 0 ?
      `${parseInt(movie.duration / 60)}ч ${movie.duration % 60}м` :
      `${movie.duration % 60}м`;
  }

  return (
    <section className='movies-cardlist' aria-label='Блок с фильмами.'>
      <ul className='movies-cardlist__container'>
        {movies &&
          movies.forEach((movie) => {
            return (
              <MoviesCard
                key={movie.id}
                _id={movie.id}
                movieId={movie.id}
                trailerLink={movie.trailerLink}
                image={movie.image}
                nameRU={movie.nameRU}
                nameEN={movie.nameEN}
                thumbnail={movie.thumbnail}
                country={movie.country || 'unknown'}
                year={movie.year || 'unknown'}
                description={movie.description || 'unknown'}
                director={movie.director || 'unknown'}
                duration={movie.duration}
                durationForCard={calculateDuration(movie)}
                currentPath={currentPath}
                moviesAmount={moviesAmount}
                onMovieLike={onMovieLike}
                onMovieDelete={onMovieDelete}
                isLiked={isLiked}
                index={movies.indexOf(movie)}
              />
            );
          })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
