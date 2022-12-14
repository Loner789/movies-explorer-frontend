// IMPORTS:
import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Devider from '../Devider/Devider';
import ButtonMore from '../ButtonMore/ButtonMore';
import Message from '../Message/Message';

// MOVIES COMPONENT:
function Movies(props) {
  // Constants:
  const {
    currentPath,
    checkboxState,
    onCheckboxChange,
    onSearch,
    onMovieLike,
  } = props;

  return (
    <main className='movies'>
      <SearchForm
        checkboxState={checkboxState}
        onCheckboxChange={onCheckboxChange}
        onSearch={onSearch}
      />
      <Preloader />
      <MoviesCardList currentPath={currentPath} onMovieLike={onMovieLike} />
      <Devider>
        {/* <ButtonMore/> */}
        <Message message='По вашему запросу ничего не найдено'/>
      </Devider>
    </main>
  );
}

export default Movies;
