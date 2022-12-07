// IMPORTS:
import './SectionTitle.css';
import React from 'react';

// TECHS COMPONENT:
function SectionTitle(props) {
  return (
    <div className='title-wrapper'>
      <h2 className='title'>{props.title}</h2>
    </div>
  );
}

export default SectionTitle;
