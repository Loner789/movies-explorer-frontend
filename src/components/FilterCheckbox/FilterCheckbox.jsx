// IMPORTS:
import './FilterCheckbox.css';
import React from 'react';

// FILTER-CHECKBOX COMPONENT:
function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <label htmlFor='toggler' className='filter-checkbox__label'>
        <input type='checkbox' className='filter-checkbox__input' id='toggler' />
        <span className='filter-checkbox__cover'></span>
      </label>
      <p className='filter-checkbox__title'>Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
