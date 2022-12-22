// IMPORTS:
import './Profile.css';
import React, { useEffect, useContext } from 'react';
import FormInput from '../FormInput/FormInput';
import FormInputError from '../FormInputError/FormInputError';
import FormDevider from '../FormDevider/FormDevider';
import Message from '../Message/Message';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { NAME_PATTERN } from '../../utils/constants';

// PROFILE COMPONENT:
function Profile(props) {
  // Constants:
  const currentUser = useContext(CurrentUserContext);
  const {
    onProfileChange,
    onProfileEdit,
    onLogout,
    currentPath,
    isChangingClicked,
    isProfileUpdated,
    errorMessage,
  } = props;
  const {
    values,
    errors,
    isValid,
    handleChange,
    setValues,
    resetForm,
    setIsValid,
    setErrors
  } = useFormAndValidation({});

  // Side-effects:
  // useEffect(() => setCurrentUserInfo(), []);

  useEffect(() => {
    setValues({ name: currentUser.name, email: currentUser.email});
    setErrors({});
    setIsValid(true);
  }, []);

  useEffect(() => {
    resetForm();
    setValues({ name: currentUser.name, email: currentUser.email });
    setIsValid(true);
  }, [currentUser]);

  // Functions:
  function handleSubmit(e) {
    e.preventDefault();

    const { name, email } = values;

    onProfileChange(name, email);
  }

  return (
    <main className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form
          className='profile__form'
          name='profile'
          onSubmit={handleSubmit}
          noValidate
        >
          <FormInputError
            classNameModifier='form-input-error_place_profile'
            errorMessage={errors.name}
          />
          <FormInput
            id='profile-form-name'
            labelClassModifier='form-input-label_place_profile'
            labelText='Имя'
            type='text'
            name='name'
            placeholder='Введите имя'
            inputClassModifier='form-input_place_profile'
            minLength='2'
            maxLength='30'
            onChange={handleChange}
            value={values.name || ''}
            pattern={NAME_PATTERN}
            disabled={!isChangingClicked}
          />
          <FormInput
            id='profile-form-email'
            labelClassModifier='form-input-label_place_profile'
            labelText='E-mail'
            type='email'
            name='email'
            placeholder='Введите email'
            inputClassModifier='form-input_place_profile'
            minLength='2'
            maxLength='30'
            onChange={handleChange}
            value={values.email || ''}
            disabled={!isChangingClicked}
          />
          <FormInputError
            classNameModifier='form-input-error_place_profile'
            errorMessage={errors.email}
          />
          <FormDevider classNameModifier='form-devider_place_profile'>
            <Message
              message='Профиль успешно обновлен!'
              currentPath={currentPath}
              isProfileUpdated={isProfileUpdated}
              errorMessage={errorMessage}
            />
            <ErrorMessage errorMessage={errorMessage} />
          </FormDevider>
          <div className='profile__buttons'>
            <button
              type='button'
              className={`profile__button profile__button_type_edit ${
                isChangingClicked ? 'profile__button_disactive' : ''
              }`}
              onClick={onProfileEdit}
            >
              Редактировать
            </button>
            <button
              type='button'
              className={`profile__button profile__button_type_leave ${
                isChangingClicked ? 'profile__button_disactive' : ''
              }`}
              onClick={onLogout}
            >
              Выйти из аккаунта
            </button>
            <button
              type='submit'
              className={`profile__button profile__button_type_save ${
                !isChangingClicked ? 'profile__button_disactive' : ''
              }`}
              disabled={
                !isValid ||
                (values.name === currentUser.name &&
                  values.email === currentUser.email)
              }
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
