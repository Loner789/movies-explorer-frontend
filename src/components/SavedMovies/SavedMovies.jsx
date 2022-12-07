// IMPORTS:
import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// SAVED-MOVIES COMPONENT:
function SavedMovies() {
  return (
    <main className='saved-movies' aria-label='Сохранённые фильмы.'>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
