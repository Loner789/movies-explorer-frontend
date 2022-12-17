// IMPORTS:
import './NotFoundPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

// NOT-FOUND-PAGE COMPONENT:
function NotFoundPage() {
  // Constants:
  const navigate = useNavigate();

  return (
    <main className='not-found-page'>
      <p className='not-found-page__error-code'>404</p>
      <p className='not-found-page__title'>Страница не найдена</p>
      <button
        type='button'
        className='not-found-page__return-button'
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </main>
  );
}

export default NotFoundPage;
