// IMPORTS:
import React, { useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import FormInput from '../FormInput/FormInput';
import FormInputError from '../FormInputError/FormInputError';
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

    onLogin(email, password);
  }

  return (
    <AuthPage
      pageTitle='Рады видеть!'
      formName='login'
      onSubmit={handleSubmit}
      isValid={isValid}
      children={
        <>
          <FormInput
            id='login-form-email'
            labelClassModifier='form-input-label_place_auth'
            labelText='E-mail'
            type='email'
            name='email'
            placeholder='Введите email'
            inputClassModifier='form-input_place_auth'
            minLength='2'
            maxLength='30'
            onChange={handleChange}
            value={values.email || ''}
          />
          <FormInputError
            classNameModifier='form-input-error_place_auth'
            errorMessage={errors.email}
          />
          <FormInput
            id='login-form-password'
            labelClassModifier='form-input-label_place_auth'
            labelText='Пароль'
            type='password'
            name='password'
            placeholder='Введите пароль'
            inputClassModifier='form-input_place_auth'
            minLength='2'
            maxLength='30'
            onChange={handleChange}
            value={values.password || ''}
          />
          <FormInputError
            classNameModifier='form-input-error_place_auth'
            errorMessage={errors.password}
          />
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
