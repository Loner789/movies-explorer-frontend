// IMPORTS:
import './Login.css';
import React from 'react';
import AuthPage from '../AuthPage/AuthPage';
import FormInput from '../FormInput/FormInput';
import FormButtons from '../FormButtons/FormButtons';

// REGISTER COMPONENT:
function Login() {
  return (
    <AuthPage
      pageTitle='Рады видеть!'
      emailInput={
        <FormInput
          labelText='E-mail'
          inputType='email'
          inputName='email'
          inputId='login-email'
          labelModifier='form-input-label_place_auth'
          inputModifier='form-input_place_auth'
        />
      }
      passwordInput={
        <FormInput
          labelText='Пароль'
          inputType='password'
          inputName='password'
          inputId='login-password'
          labelModifier='form-input-label_place_auth'
          inputModifier='form-input_place_auth'
        />
      }
      buttons={
        <FormButtons
          topBtnText='Войти'
          bottomBtnText='Регистрация'
          topBtnModifier='form-buttons__button_type_submit form-buttons__button_place_login'
          bottomBtnModifier='form-buttons__button_type_redirect'
          buttonCaption='Ещё не зарегистрированы?'
        />
      }
    />
  );
}

export default Login;
