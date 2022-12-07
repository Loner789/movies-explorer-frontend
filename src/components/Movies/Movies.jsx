// IMPORTS:
import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// MOVIES COMPONENT:
function Movies() {
  return (
    <main className='movies'>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default Movies;
