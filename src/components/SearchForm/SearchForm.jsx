// IMPORTS:
import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

// SEARCH-FORM COMPONENT:
function SearchForm() {
  return (
    <section className='search-form' aria-label='Раздел поиска фильмов.'>
      <div className='search-form__form-wrapper'>
        <form action='#' className='search-form__form' name='search-form'>
          <input
            type='search'
            className='search-form__search-input'
            placeholder='Фильм'
          />
          <button type='submit' className='search-form__submit-button' aria-label='Клопка поиска.'/>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
