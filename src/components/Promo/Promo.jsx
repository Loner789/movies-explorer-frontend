// IMPORTS:
import './Promo.css';
import React from 'react';
import { ExternalLink } from 'react-external-link';

// PROMO COMPONENT:
function Promo() {
  return (
    <section className='promo'>
      <div className='promo__text'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
      </div>
      <ExternalLink
        className='promo__button'
        rel='noreferrer'
        href='https://github.com/Loner789/movies-explorer-frontend'
        target='blank'
      >
        Узнать больше
      </ExternalLink>
    </section>
  );
}

export default Promo;
