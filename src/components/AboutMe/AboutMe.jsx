// IMPORTS:
import './AboutMe.css';
import React from 'react';
import { ExternalLink } from 'react-external-link';
import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';

// ABOUT-ME COMPONENT:
function AboutMe() {
  return (
    <section className='about-me'>
      <SectionTitle title='Студент'/>
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Дмитрий</h3>
          <p className='about-me__profession'>Фронтенд-разработчик, 31 год</p>
          <p className='about-me__description'>
            Я родился и живу в Саратове, окончил факультет экономики СГУ. У меня
            есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
            Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ExternalLink
            className='about-me__portfolio-link'
            rel='noreferrer'
            href='https://github.com/Loner789/movies-explorer-frontend'
            target='blank'
          >Github</ExternalLink>
        </div>
        <div className='about-me__photo'></div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
