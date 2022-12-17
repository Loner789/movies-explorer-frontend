// IMPORTS:
import './Devider.css';
import React from 'react';

// DEVIDER COMPONENT:
function Devider(props) {
  // Constants:
  const { children } = props;

  return ( 
    <section className='devider'>
        {children}
    </section>
   );
}

export default Devider;