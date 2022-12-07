// IMPORTS:
import './Profile.css';
import React from 'react';
import FormInput from '../FormInput/FormInput';
import FormButtons from '../FormButtons/FormButtons';

// PROFILE COMPONENT:
function Profile() {
  return (
    <main className='profile'>
      <div className='profile__container'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form action='#' className='profile__form'>
          <FormInput
            labelText='Имя'
            inputType='text'
            inputName='name'
            inputId='profile-name'
            modifier=''
          />
          <FormInput
            labelText='E-mail'
            inputType='email'
            inputName='email'
            inputId='profile-email'
            modifier=''
          />
        </form>
        <FormButtons
          topBtnText='Редактировать'
          bottomBtnText='Выйти из аккаунта'
          topBtnModifier='form-buttons__button_place_profile'
          bottomBtnModifier='form-buttons__button_type_leave'
        />
      </div>
    </main>
  );
}

export default Profile;
