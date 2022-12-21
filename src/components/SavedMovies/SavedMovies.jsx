// IMPORTS:
import './SavedMovies.css';
import React from 'react';
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
    setIsSearchValid, 
    onCheckboxChange,
    onSearch,
    isSearchStarted,
    savedMoviesSearchResult,
    onMovieDelete,
    errorMessage,
  } = props;

  const moviesList = isSearchStarted ? savedMoviesSearchResult : movies;

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
