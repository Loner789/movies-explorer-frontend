// IMPORTS:
import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Devider from '../Devider/Devider';
import ButtonMore from '../ButtonMore/ButtonMore';
import Message from '../Message/Message';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useMoviesAmount from '../../hooks/useMoviesAmount';

// SAVED-MOVIES COMPONENT:
function SavedMovies(props) {
  // Constants:
  const {
    movies,
    currentPath,
    onCheckboxChange,
    onSearch,
    isLoading,
    isFirstVisit,
    onMovieDelete,
    errorMessage,
  } = props;
  const { moviesAmount, addMoreMovies } = useMoviesAmount();

  return (
    <main className='saved-movies' aria-label='Сохранённые фильмы.'>
      <SearchForm onCheckboxChange={onCheckboxChange} onSearch={onSearch} />
      <MoviesCardList
        movies={movies}
        currentPath={currentPath}
        moviesAmount={moviesAmount}
        onMovieDelete={onMovieDelete}
      />
      <Preloader isLoading={isLoading} />
      <Devider>
        <ButtonMore
          movies={movies}
          moviesAmount={moviesAmount}
          onClick={addMoreMovies}
        />
        {(isFirstVisit || !localStorage.savedMovies) && (
          <Message
            currentPath={currentPath}
            movies={movies}
            isLoading={isLoading}
            message='У вас пока что нет сохранённых фильмов'
            errorMessage={errorMessage}
          />
        )}
        {!isFirstVisit && movies.length === 0 && (
          <Message
            currentPath={currentPath}
            movies={movies}
            isLoading={isLoading}
            message='По вашему запросу ничего не найдено'
            errorMessage={errorMessage}
          />
        )}
        <ErrorMessage errorMessage={errorMessage}/>
      </Devider>
    </main>
  );
}

export default SavedMovies;
