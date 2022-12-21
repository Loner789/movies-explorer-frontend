// IMPORTS:
import './SavedMovies.css';
import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Devider from '../Devider/Devider';
import Message from '../Message/Message';

// SAVED-MOVIES COMPONENT:
function SavedMovies(props) {
  // Constants:
  const {
    movies,
    currentPath,
    isLoading,
    isShortFilm,
    setIsSearchStarted,
    onCheckboxChange,
    onSearch,
    isSearchStarted,
    savedMoviesSearchResult,
    onMovieDelete,
    setIsSearchValid,
    errorMessage,
    loadSavedMovies,
  } = props;
  const moviesList = isSearchStarted ? savedMoviesSearchResult : movies;

  // Side-effects:
  useEffect(() => loadSavedMovies(), []);

  return (
    <main className='saved-movies' aria-label='Сохранённые фильмы.'>
      <SearchForm
        currentPath={currentPath}
        isShortFilm={isShortFilm}
        onCheckboxChange={onCheckboxChange}
        onSearch={onSearch}
        setIsSearchStarted={setIsSearchStarted}
        setIsSearchValid={setIsSearchValid}
      />
      <MoviesCardList
        movies={moviesList}
        currentPath={currentPath}
        onMovieDelete={onMovieDelete}
      />
      <Devider>
        <Preloader isLoading={isLoading} />
        {!errorMessage && moviesList.length === 0 && (
          <Message
            currentPath={currentPath}
            movies={moviesList}
            isLoading={isLoading}
            message='Ничего не найдено'
            errorMessage={errorMessage}
          />
        )}
        {errorMessage && (
          <Message
            currentPath={currentPath}
            movies={moviesList}
            isLoading={isLoading}
            message={errorMessage}
            errorMessage={errorMessage}
          />
        )}
      </Devider>
    </main>
  );
}

export default SavedMovies;
