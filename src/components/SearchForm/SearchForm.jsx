// IMPORTS:
import './SearchForm.css';
import React, { useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormAndValidation from '../../hooks/useFormAndValidation';

// SEARCH-FORM COMPONENT:
function SearchForm(props) {
  // Constants:
  const {
    currentPath,
    isShortFilm,
    onCheckboxChange,
    onSearch,
    setIsSearchStarted,
    setIsSearchValid,
  } = props;
  const { values, handleChange, isValid, setValues } = useFormAndValidation();

  // Functions:
  function handleSubmit(e) {
    e.preventDefault();

    setIsSearchStarted(true);
    setIsSearchValid(isValid);
    isValid && onSearch(values.movie);
  }

  // Side-effects:
  useEffect(() => {
    if (currentPath === '/movies') {
      setValues({ movie: localStorage.searchRequest });
    }
    if (currentPath === '/saved-movies') {
      setValues({ movie: localStorage.savedMoviesSearchRequest });
    }
  }, []);

  return (
    <section className='search-form' aria-label='Раздел поиска фильмов.'>
      <div className='search-form__form-container'>
        <form
          className='search-form__form'
          name='search-form'
          onSubmit={handleSubmit}
          noValidate
        >
          <div className='search-form__input-wrapper'>
            <input
              type='search'
              name='movie'
              id='search-form-input'
              className='search-form__search-input'
              placeholder='Фильм'
              required
              value={values.movie || ''}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='search-form__submit-button'
              aria-label='Клопка поиска.'
            />
          </div>
          <FilterCheckbox
            isShortFilm={isShortFilm}
            onCheckboxChange={onCheckboxChange}
          />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
