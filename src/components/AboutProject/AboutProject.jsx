// IMPORTS:
import './AboutProject.css';
import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

// ABOUT-PROJECT COMPONENT:
function AboutProject() {
  return (
    <section className='about-project'>
      <SectionTitle title='О проекте' />
      <div className='about-project__info-wrapper'>
        <div className='about-project__info'>
          <h3 className='about-project__info-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__info-description'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__info'>
          <h3 className='about-project__info-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__info-description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__graph-wrapper'>
        <div className='about-project__graph'>
          <div className='about-project__graph-info about-project__graph-info_type_backend'>
            1 неделя
          </div>
          <div className='about-project__graph-info about-project__graph-info_type_frontend'>
            4 недели
          </div>
        </div>
        <div className='about-project__graph'>
          <div className='about-project__graph-info about-project__graph-info_type_backend-caption'>
            Back-end
          </div>
          <div className='about-project__graph-info about-project__graph-info_type_frontend-caption'>
            Front-end
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
