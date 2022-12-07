// IMPORTS:
import './Register.css';
import React from 'react';
import AuthPage from '../AuthPage/AuthPage';
import FormInput from '../FormInput/FormInput';
import FormButtons from '../FormButtons/FormButtons';

// PROFILE COMPONENT:
function Register() {
  return (
    <AuthPage
      pageTitle='Добро пожаловать!'
      nameInput={
        <FormInput
          labelText='Имя'
          inputType='text'
          inputName='name'
          inputId='register-name'
          labelModifier='form-input-label_place_auth'
          inputModifier='form-input_place_auth'
        />
      }
      emailInput={
        <FormInput
          labelText='E-mail'
          inputType='email'
          inputName='email'
          inputId='register-email'
          labelModifier='form-input-label_place_auth'
          inputModifier='form-input_place_auth'
        />
      }
      passwordInput={
        <FormInput
          labelText='Пароль'
          inputType='password'
          inputName='password'
          inputId='register-password'
          labelModifier='form-input-label_place_auth'
          inputModifier='form-input_place_auth'
        />
      }
      buttons={
        <FormButtons
          topBtnText='Зарегистрироваться'
          bottomBtnText='Войти'
          topBtnModifier='form-buttons__button_type_submit form-buttons__button_place_register'
          bottomBtnModifier='form-buttons__button_type_redirect'
          buttonCaption='Уже зарегистрированы?'
        />
      }
    />
  );
}

export default Register;
