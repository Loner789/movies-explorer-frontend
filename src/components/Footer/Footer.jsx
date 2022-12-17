// IMPORTS:
import './Footer.css';
import React from 'react';
import { ExternalLink } from 'react-external-link';

// FOOTER COMPONENT:
function Footer(props) {
  // Constants:
  const { currentPath } = props;
  const isVisible =
    currentPath === '/' ||
    currentPath === '/movies' ||
    currentPath === '/saved-movies';

  return isVisible ? (
    <footer className='footer'>
      <p className='footer__description'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__wrapper'>
        <p className='footer__year'>&copy;&nbsp;{new Date().getFullYear()}</p>
        <div className='footer__links-wrapper'>
          <ExternalLink
            className='footer__link'
            rel='noreferrer'
            href='https://practicum.yandex.ru'
            target='blank'
          >
            Яндекс.Практикум
          </ExternalLink>
          <ExternalLink
            className='footer__link'
            rel='noreferrer'
            href='https://github.com/Loner789/movies-explorer-frontend'
            target='blank'
          >
            Github
          </ExternalLink>
        </div>
      </div>
    </footer>
  ) : null;
}

export default Footer;
