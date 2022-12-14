// IMPORTS:
import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormAndValidation from '../../hooks/useFormAndValidation';

// SEARCH-FORM COMPONENT:
function SearchForm(props) {
  // Constants:
  const { onCheckboxChange, onSearch } = props;
  const { values, handleChange, isValid } = useFormAndValidation();

  // Functions:
  function handleSubmit(e) {
    e.preventDefault();

    isValid && onSearch(values.movie);
  }

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
          <FilterCheckbox onCheckboxChange={onCheckboxChange} />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
