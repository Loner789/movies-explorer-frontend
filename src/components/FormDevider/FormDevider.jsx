// IMPORTS:
import './FormDevider.css';
import React from 'react';

// DEVIDER COMPONENT:
function FormDevider(props) {
  // Constants:
  const { children } = props;

  return ( 
    <div className='form-devider'>
        {children}
    </div>
   );
}

export default FormDevider;