// IMPORTS:
import './Preloader.css';
import React from 'react';

// PRELOADER COMPONENT:
function Preloader(props) {
  // Constants:
  const { isLoading } = props;

  return (
    <div className={`preloader ${isLoading ? 'preloader_visible' : ''}`}>
      <div className='preloader__container'>
        <span className='preloader__round'></span>
      </div>
    </div>
  );
}

export default Preloader;
