// IMPORTS:
import './FormInput.css';
import React from 'react';

// FORM-INPUT COMPONENT:
function FormInput(props) {
  // Constants:
  const {
    id,
    labelClassModifier,
    labelText,
    type,
    name,
    placeholder,
    inputClassModifier,
    minLength,
    maxLength,
    onChange,
    value,
    pattern,
    disabled,
  } = props;

  return (
    <label htmlFor={id} className={`form-input-label ${labelClassModifier}`}>
      {labelText}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        autoComplete={type === 'password' ? 'on' : undefined}
        className={`form-input ${inputClassModifier}`}
        required
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
        pattern={pattern}
        disabled={disabled}
      />
    </label>
  );
}

export default FormInput;
