// IMPORTS:
import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// SAVED-MOVIES COMPONENT:
function SavedMovies(props) {
    // Constants:
    const { currentPath, onMovieDelete } = props;

  return (
    <main className='saved-movies' aria-label='Сохранённые фильмы.'>
      <SearchForm />
      <MoviesCardList currentPath={currentPath} onMovieDelete={onMovieDelete}/>
    </main>
  );
}

export default SavedMovies;
