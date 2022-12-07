// IMPORTS:
import './FormInput.css';
import React from 'react';

// FORM-INPUT COMPONENT:
function FormInput(props) {
  // Constants:
  const { labelText, inputType, inputName, inputId, labelModifier, inputModifier } = props;

  return (
    <label htmlFor='profile-name' className={`form-input-label ${labelModifier}`}>
      {labelText}
      <input
        type={inputType}
        className={`form-input ${inputModifier}`}
        name={inputName}
        id={inputId}
      />
    </label>
  );
}

export default FormInput;
