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
      <SectionTitle title='Студент' />
      <div className='about-me__container'>
        <div className='about-me__info'>
          <h3 className='about-me__name'>Дмитрий</h3>
          <p className='about-me__profession'>Фронтенд-разработчик, 31 год</p>
          <p className='about-me__description'>
            Окончил факультет экономической безопасности ЛГУВД им.
            Э.&nbsp;А.&nbsp;Дидоренко. Я&nbsp;люблю слушать музыку, а&nbsp;ещё
            увлекаюсь фитнесом. Для меня главное в&nbsp;сфере
            web-разработки&nbsp;&mdash; практически безграничные возможности для
            развития и&nbsp;самосовершенствования. В&nbsp;особенности меня
            мотивирует и&nbsp;вдохновляет&nbsp;то, что результат своей работы
            я&nbsp;могу видеть здесь и&nbsp;сейчас.
          </p>
          <ExternalLink
            className='about-me__portfolio-link'
            rel='noreferrer'
            href='https://github.com/Loner789/movies-explorer-frontend'
            target='blank'
          >
            Github
          </ExternalLink>
        </div>
        <div className='about-me__photo'></div>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
