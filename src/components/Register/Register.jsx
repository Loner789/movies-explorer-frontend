// IMPORTS:
import React, { useEffect } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import FormInput from '../FormInput/FormInput';
import FormInputError from '../FormInputError/FormInputError';
import FormDevider from '../FormDevider/FormDevider';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
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
  const { onRegister, errorMessage } = props;
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

    onRegister(name, email, password);
  }

  return (
    <AuthPage
      pageTitle='Добро пожаловать!'
      formName='register'
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <FormInput
        id='register-form-name'
        labelClassModifier='form-input-label_place_auth'
        labelText='Имя'
        type='text'
        name='name'
        placeholder='Введите имя'
        inputClassModifier='form-input_place_auth'
        minLength='2'
        maxLength='30'
        onChange={handleChange}
        value={values.name || ''}
        pattern='^[a-zA-Zа-яА-Я\s-]+$'
      />
      <FormInputError
        classNameModifier='form-input-error_place_auth'
        errorMessage={errors.name}
      />
      <FormInput
        id='register-form-email'
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
        id='register-form-password'
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
      <FormDevider>
        <ErrorMessage errorMessage={errorMessage} />
      </FormDevider>
      <AuthButtons
        buttonText='Зарегистрироваться'
        buttonCaption='Уже зарегистрированы?'
        link='/signin'
        linkText='Войти'
        onSubmit={handleSubmit}
        isValid={isValid}
      />
    </AuthPage>
  );
}

export default Register;
