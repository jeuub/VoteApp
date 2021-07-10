import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { setCurrentUser, addError, setToken } from '../store/actions';
import decode from 'jwt-decode';
import { HashRouter as Router } from 'react-router-dom';
import RouteViews from './RouteViews';
import NavBar from './NavBar';
import PageFooter from './Footer';
import '../styles/style.css';

if (localStorage.jwt) {
  setToken(localStorage.jwt);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwt)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const App = () => <Provider store={store}>
  <Router>
    <Fragment>
      <NavBar/> 
      <RouteViews/>
      <PageFooter/>
    </Fragment>
  </Router>
</Provider>

export default App;