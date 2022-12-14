// IMPORTS:
import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

// MOVIES-CARDLIST COMPONENT:
function MoviesCardList(props) {
  // Constants:
  const { currentPath, onMovieLike, onMovieDelete, isLiked } = props;

  return (
    <section className='movies-cardlist'>
      <ul className='movies-cardlist__container'>
        <MoviesCard
          trailerLink={
            'http://klublady.ru/uploads/posts/2022-02/1644849720_29-klublady-ru-p-kapkeiki-ochen-krasivie-foto-30.jpg'
          }
          image={
            'http://klublady.ru/uploads/posts/2022-02/1644849720_29-klublady-ru-p-kapkeiki-ochen-krasivie-foto-30.jpg'
          }
          nameRU={'33 слова о дизайне'}
          movieId={'12345'}
          duration={'1ч42м'}
          currentPath={currentPath}
          onMovieLike={onMovieLike}
          onMovieDelete={onMovieDelete}
          isLiked={isLiked}
        />
      </ul>
    </section>
  );
}

export default MoviesCardList;
