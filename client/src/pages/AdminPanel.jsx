import React from 'react';
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import Reviews from '../components/AllReviews';

const AuthPage = () => {
  const history = useHistory();
  if (!localStorage.getItem('adminToken')) history.push('/admin');
  return (
    <section>
      <h1>Панель администратора</h1>
      <ErrorMessage />
      <Reviews />
    </section>
  )
};

export default AuthPage;