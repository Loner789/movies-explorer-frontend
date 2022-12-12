// IMPORTS:
import './Profile.css';
import React, { useEffect, useContext } from 'react';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// PROFILE COMPONENT:
function Profile(props) {
  // Constants:
  const currentUser = useContext(CurrentUserContext);
  const { onProfileChange, onProfileEdit, onLogout, isChangingClicked } = props;
  const {
    values,
    errors,
    isValid,
    handleChange,
    setValues,
    resetForm,
    setIsValid,
  } = useFormAndValidation({});

  // Side-effects:
  useEffect(() => {
    resetForm();
    setValues(currentUser);
    setIsValid(true);
  }, [currentUser]);

  // Functions:
  function handleSubmit(e) {
    e.preventDefault();

    const { name, email } = values;

    onProfileChange({ name: name, email: email });
  }

  return (
    <main className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form
          className='profile__form'
          name='profile'
          onSubmit={handleSubmit}
          noValidate
        >
          <span className='profile__form-input-error'>{errors.name}</span>
          <label htmlFor='name' className='profile__form-input-label'>
            Имя
            <input
              type='text'
              id='name'
              name='name'
              className='profile__form-input'
              required
              minLength='2'
              maxLength='30'
              onChange={handleChange}
              value={values.name || ''}
              disabled={!isChangingClicked}
            />
          </label>
          <label htmlFor='email' className='profile__form-input-label'>
            E-mail
            <input
              type='email'
              id='email'
              name='email'
              className='profile__form-input'
              required
              minLength='2'
              maxLength='30'
              onChange={handleChange}
              value={values.email || ''}
              disabled={!isChangingClicked}
            />
          </label>
          <span className='profile__form-input-error'>{errors.email}</span>
          <div className='profile__buttons'>
            <button
              type='button'
              className={`profile__button profile__button_type_edit ${
                isChangingClicked && 'profile__button_disactive'
              }`}
              onClick={onProfileEdit}
            >
              Редактировать
            </button>
            <button
              type='button'
              className={`profile__button profile__button_type_leave ${
                isChangingClicked && 'profile__button_disactive'
              }`}
              onClick={onLogout}
            >
              Выйти из аккаунта
            </button>
            <button
              type='submit'
              className={`profile__button profile__button_type_save ${
                !isChangingClicked && 'profile__button_disactive'
              }`}
              disabled={!isValid}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
