// IMPORTS:
import './FormDevider.css';
import React from 'react';

// DEVIDER COMPONENT:
function FormDevider(props) {
  // Constants:
  const { children, classNameModifier } = props;

  return ( 
    <div className={`form-devider ${classNameModifier}`}>
        {children}
    </div>
   );
}

export default FormDevider;