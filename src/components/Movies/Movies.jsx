// IMPORTS:
import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// MOVIES COMPONENT:
function Movies(props) {
  // Constants:
  const { currentPath, onMovieLike } = props;

  return (
    <main className='movies'>
      <SearchForm />
      <Preloader />
      <MoviesCardList currentPath={currentPath} onMovieLike={onMovieLike} />
    </main>
  );
}

export default Movies;
