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
  } = props;

  // Functions:
  function calculateDuration(movie) {
    return parseInt(movie.duration / 3600) > 0 ?
      `${parseInt(movie.duration / 3600)}ч ${parseInt((movie.duration % 3600) / 60)}м` :
      `${parseInt((movie.duration % 3600) / 60)}м`;
  }

  return (
    <section className='movies-cardlist' aria-label='Блок с фильмами.'>
      <ul className='movies-cardlist__container'>
        {movies &&
          movies.map((movie) => {
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
