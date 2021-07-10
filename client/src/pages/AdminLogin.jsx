import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Auth from '../components/auth';
import ErrorMessage from '../components/ErrorMessage';


const AuthPage = ({ authType, isAuthenticated }) => {
  const history = useHistory()
  if (localStorage.getItem('adminToken')) {history.push('/adminPanel')};
  return (
    <section>
      <ErrorMessage />
      <Auth authType={'admin'} />
      <div className="auth__link">
        <Link to="/login">Войти как пользователь</Link>
      </div>
    </section>
  )
};

export default AuthPage;