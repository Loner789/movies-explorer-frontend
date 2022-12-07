// IMPORTS:
import './FormButtons.css';
import React from 'react';

// FORM-BUTTONS COMPONENT:
function FormButtons(props) {
  // Constants:
  const { topBtnText, bottomBtnText, topBtnModifier, bottomBtnModifier, buttonCaption } =
    props;

  return (
    <div className='form-buttons'>
      <button className={`form-buttons__button ${topBtnModifier}`}>{topBtnText}</button>
      <div className='form-buttons__button-wrapper'>
        <p className="form-buttons__caption">{buttonCaption}</p>
        <button className={`form-buttons__button ${bottomBtnModifier}`}>
          {bottomBtnText}
        </button>
      </div>
    </div>
  );
}

export default FormButtons;
