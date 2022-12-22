// IMPORTS:
import './FormInputError.css';
import React from 'react';

// FORM-INPUT-ERROR COMPONENT:
function FormInputError(props) {
  // Constants:
  const { classNameModifier, errorMessage } = props;
  return (
    <span className={`form-input-error ${classNameModifier}`}>
      {errorMessage}
    </span>
  );
}

export default FormInputError;
