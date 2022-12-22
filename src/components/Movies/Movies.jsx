// IMPORTS:
import './Movies.css';
import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Devider from '../Devider/Devider';
import ButtonMore from '../ButtonMore/ButtonMore';
import Message from '../Message/Message';
import useMoviesAmount from '../../hooks/useMoviesAmount';

// MOVIES COMPONENT:
function Movies(props) {
  // Constants:
  const {
    movies,
    isShortFilm,
    isSearchStarted,
    setIsSearchStarted,
    isSearchValid,
    setIsSearchValid,
    currentPath,
    onCheckboxChange,
    onSearch,
    isLoading,
    isFirstVisit,
    onMovieLike,
    errorMessage,
    loadMovies,
  } = props;
  const { moviesAmount, addMoreMovies } = useMoviesAmount();

  // Side-effects:
  useEffect(() => loadMovies(), []);

  return (
    <main className='movies'>
      <SearchForm
        currentPath={currentPath}
        isShortFilm={isShortFilm}
        onCheckboxChange={onCheckboxChange}
        onSearch={onSearch}
        setIsSearchStarted={setIsSearchStarted}
        setIsSearchValid={setIsSearchValid}
      />
      <MoviesCardList
        movies={movies}
        currentPath={currentPath}
        moviesAmount={moviesAmount}
        onMovieLike={onMovieLike}
      />
      <Devider>
        <Preloader isLoading={isLoading} />
        <ButtonMore
          movies={movies}
          moviesAmount={moviesAmount}
          onClick={addMoreMovies}
        />
        {!errorMessage && isFirstVisit && !localStorage.movies && (
          <Message
            currentPath={currentPath}
            movies={movies}
            isLoading={isLoading}
            message='Введите запрос в поисковую строку'
            errorMessage={errorMessage}
          />
        )}
        {!errorMessage &&
          !isFirstVisit &&
          isSearchValid &&
          movies.length === 0 && (
            <Message
              currentPath={currentPath}
              movies={movies}
              isLoading={isLoading}
              message='Ничего не найдено'
              errorMessage={errorMessage}
            />
          )}
        {!errorMessage && !isSearchValid && isSearchStarted && (
          <Message
            currentPath={currentPath}
            movies={movies}
            isLoading={isLoading}
            message='Нужно ввести ключевое слово'
            errorMessage={errorMessage}
          />
        )}
        {errorMessage && (
          <Message
            currentPath={currentPath}
            movies={movies}
            isLoading={isLoading}
            message={errorMessage}
            errorMessage={errorMessage}
          />
        )}
      </Devider>
    </main>
  );
}

export default Movies;
