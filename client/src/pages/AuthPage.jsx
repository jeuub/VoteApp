import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Auth from '../components/auth';
import ErrorMessage from '../components/ErrorMessage';

const AuthPage = ({ authType, isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to={'/'} />;
  return (
    <section>
      <ErrorMessage />
      <Auth authType={authType} />
      <div className="auth__link">
      <Link to="/admin">Панель администратора</Link>
      </div>
    </section>
  )
};

export default AuthPage;