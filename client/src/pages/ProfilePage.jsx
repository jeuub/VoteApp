import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { call } from '../services/api';
import ErrorMessage from '../components/ErrorMessage';

const ProfilePage = ({ isAuthenticated, name, id }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />
  }
  const [newName, setNewName] = useState(name);
  const [newNameDone, setNewNameDone] = useState(false);
  const [review, setReview] = useState('');
  const [reviewDone, setreviewDone] = useState(false);
  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    call('put', 'auth/changename', { username: name, new: newName }).then(
      setNewNameDone(true)
    )
  }
  function handleChangeReview(e) {
    setReview(e.target.value);
  }
  function handleSubmitReview(e) {
    e.preventDefault()
    call('post', 'review', { textReview: review, }).then(
      document.querySelector('.profile__message').style.opacity = '1',
      setTimeout(() => document.querySelector('.profile__message')? document.querySelector('.profile__message').style.opacity = '0': null, 3000)
    )
  }
return (
  <main>

    <ErrorMessage />
    <section className='profile'>
      <h1 className="profile__title">Здравствуйте, {name}</h1>
      {newNameDone ?
        <div className="profile__message">Изменения вступят в силу после того, как вы перезайдете, пожалуйста, авторизуйтесь повторно.</div> : null
      }
      <form onSubmit={(e) => handleSubmit(e)} className="profile__form profile__form-first">
        <label>
          Хотите изменить имя?
          <input
            type="text"
            defaultValue={name}
            onChange={e => handleChange(e)}
          />
        </label>
        <button type="submit">
          Изменить
        </button>
      </form>
      <div className="profile__message">Отзыв успешно отправлен</div>
      <form onSubmit={(e) => handleSubmitReview(e)} className="profile__form">
        <label>
          Оставить отзыв:
          <textarea
            type="text"
            onChange={e => handleChangeReview(e)}
          />
        </label>
        <button type="submit">
          отправить
        </button>
      </form>
    </section>
  </main>
);
}

export default ProfilePage
