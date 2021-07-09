import React from 'react';
import Elections5 from '../img/elections_05.svg'
import Elections1 from '../img/elections_01.svg'
import myAvatar from '../img/avatar.jpg'

import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main className="landing">
      <section className="landing__start">
        <div className="landing__start__info">
          <h1>
            Начните проводить опросы онлайн.
          </h1>
          <div>
            <Link to="/register">Регистрация</Link>
            <a href="#info" className="landing__start__info__more">Больше...</a>
          </div>
        </div>
        <div className="landing__start__img">
          <img style={{ filter: 'grayscale(1)' }} src={Elections5} alt="asd" />
        </div>
      </section>
      <section className="landing__target" id="info">
        <h2>
          Для чего нужен этот сайт?
        </h2>
        <div className="landing__target__content">
          <img src={Elections1} className="landing__target__img" style={{ filter: 'grayscale(1)' }} alt="" />
          <p>Данный сайт предоставляет вам доступ к созданию опросов, в котором могут участвовать все пользователи. Сайт является полностью некоммерческим студенческим проектом.</p>
        </div>
      </section>
      <section className="landing__team">
        <h2>
          Наша команда:
        </h2>
        <div className="landing__team__content">
          <p>
            Бодур Эййюб  <span><a target="_blank" href="https://github.com/jeuub"><i className="fab fa-github"></i></a>
              <a target="_blank" href="https://vk.com/meowkenn"><i className="fab fa-vk"></i></a></span>
            <br />
            Команда разработчиков состоит из одного человека, что полностю отвечает за полный путь создания сайта. Проект создан в рамках инженерного проектирования <b> Московского Политхенического Университета.</b>
          </p>
          <figure>
            <img src={myAvatar} className="landing__team__content__img" style={{ borderRadius: '50%' }} alt="" />
          </figure>
          <div>
          </div>
        </div>
      </section>
      <section className="landing__techs">
        <h2>Используемые Технологии</h2>
      </section>
    </main>
  )
};

export default Landing;