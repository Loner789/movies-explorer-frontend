// IMPORTS:
import './Techs.css';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

// TECHS COMPONENT:
function Techs() {
  return (
    <section className='techs'>
      <SectionTitle title='Технологии' />
      <div className='techs__wrapper'>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <p className='techs__description'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className='techs__badges-container'>
          <li className='techs__badge techs__badge_type_html'></li>
          <li className='techs__badge techs__badge_type_css'></li>
          <li className='techs__badge techs__badge_type_js'></li>
          <li className='techs__badge techs__badge_type_react'></li>
          <li className='techs__badge techs__badge_type_git'></li>
          <li className='techs__badge techs__badge_type_express'></li>
          <li className='techs__badge techs__badge_type_mongo'></li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
