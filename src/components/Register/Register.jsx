// IMPORTS:
import React, { useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import AuthButtons from '../AuthButtons/AuthButtons';
import useFormAndValidation from '../../hooks/useFormAndValidation';

// Initial data for state-variable
const initValues = {
  name: '',
  email: '',
  password: '',
};

// REGISTER COMPONENT:
function Register(props) {
  // Constants:
  const { onRegister } = props;
  const { values, errors, isValid, handleChange, setIsValid } =
    useFormAndValidation(initValues);

  // Side-effects:
  useEffect(() => {
    setIsValid(false);
  }, []);

  // Functions:
  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password } = values;

    onRegister(name, email, password)
  }

  return (
    <AuthPage
      pageTitle='Добро пожаловать!'
      formName='register'
      onSubmit={handleSubmit}
      isValid={isValid}
      children={
        <>
          <label htmlFor='name' className='auth-page__form-input-label'>
            Имя
            <input
              type='text'
              id='name'
              name='name'
              className='auth-page__form-input'
              required
              minLength='2'
              maxLength='30'
              onChange={handleChange}
              value={values.name || ''}
            />
          </label>
          <span className='auth-page__form-input-error'>{errors.name}</span>
          <label htmlFor='email' className='auth-page__form-input-label'>
            E-mail
            <input
              type='email'
              id='email'
              name='email'
              className='auth-page__form-input'
              required
              minLength='2'
              maxLength='30'
              onChange={handleChange}
              value={values.email || ''}
            />
          </label>
          <span className='auth-page__form-input-error'>{errors.email}</span>
          <label htmlFor='password' className='auth-page__form-input-label'>
            Пароль
            <input
              type='password'
              id='password'
              name='password'
              autoComplete='on'
              className='auth-page__form-input'
              required
              minLength='2'
              maxLength='30'
              onChange={handleChange}
              value={values.password || ''}
            />
          </label>
          <span className='auth-page__form-input-error'>{errors.password}</span>
        </>
      }
      buttons={
        <AuthButtons
          placeModifier='auth-buttons_place_register'
          buttonText='Зарегистрироваться'
          buttonCaption='Уже зарегистрированы?'
          link='/signin'
          linkText='Войти'
          onSubmit={handleSubmit}
          isValid={isValid}
        />
      }
    />
  );
}

export default Register;
