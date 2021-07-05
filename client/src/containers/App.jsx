import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { setCurrentUser, addError, setToken } from '../store/actions';
import decode from 'jwt-decode';

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
  <div>asdasdasd</div>
</Provider>

export default App;