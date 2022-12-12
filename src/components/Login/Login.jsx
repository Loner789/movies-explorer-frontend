// IMPORTS:
import React, { useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import AuthButtons from '../AuthButtons/AuthButtons';
import useFormAndValidation from '../../hooks/useFormAndValidation';

// Initial data for state-variable
const initValues = {
  email: '',
  password: '',
};

// LOGIN COMPONENT:
function Login(props) {
  // Constants:
  const { onLogin } = props;
  const { values, errors, isValid, handleChange, setIsValid } =
    useFormAndValidation(initValues);

  // Side-effects:
  useEffect(() => {
    setIsValid(false);
  }, []);

  // Functions:
  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = values;

    if (!email || !password) return;

    onLogin(email, password)
  }

  return (
    <AuthPage
      pageTitle='Рады видеть!'
      formName='login'
      onSubmit={handleSubmit}
      isValid={isValid}
      children={
        <>
          <label
            htmlFor='email'
            className='auth-page__form-input-label'
          >
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
          <label
            htmlFor='password'
            className='auth-page__form-input-label'
          >
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
          placeModifier='auth-buttons_place_login'
          buttonText='Войти'
          buttonCaption='Ещё не зарегистрированы?'
          link='/signup'
          linkText='Регистрация'
          onSubmit={handleSubmit}
          isValid={isValid}
        />
      }
    />
  );
}

export default Login;
