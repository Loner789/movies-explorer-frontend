// IMPORTS:
import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

// SAVED-MOVIES COMPONENT:
function SavedMovies(props) {
    // Constants:
    const { currentPath, checkboxState, onCheckboxChange, onSearch, onMovieDelete } = props;

  return (
    <main className='saved-movies' aria-label='Сохранённые фильмы.'>
      <SearchForm checkboxState={checkboxState} onCheckboxChange={onCheckboxChange} onSearch={onSearch} />
      <Preloader />
      <MoviesCardList currentPath={currentPath} onMovieDelete={onMovieDelete}/>
    </main>
  );
}

export default SavedMovies;
