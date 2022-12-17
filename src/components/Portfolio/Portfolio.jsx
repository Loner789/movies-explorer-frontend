// IMPORTS:
import './Portfolio.css';
import React from 'react';
import { ExternalLink } from 'react-external-link';

// PORTFOLIO COMPONENT:
function Portfolio() {
  return (
    <div className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li>
          <ExternalLink
            className='portfolio__link'
            rel='noreferrer'
            href='https://github.com/Loner789/how-to-learn'
            target='blank'
          >
            Статичный сайт
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            className='portfolio__link'
            rel='noreferrer'
            href='https://github.com/Loner789/russian-travel'
            target='blank'
          >
            Адаптивный сайт
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            className='portfolio__link'
            rel='noreferrer'
            href='https://github.com/Loner789/mesto-react'
            target='blank'
          >
            Одностраничное приложение
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
