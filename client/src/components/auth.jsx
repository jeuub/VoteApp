import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { authUser, logout } from '../store/actions';
import { call } from '../services/api';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const { authType } = this.props;
    if (this.props.authType !== 'admin') {
      this.props.authUser(authType || 'login', { username, password });
    } else {
      async function getData(username, password) {
        let data = await call('post', 'admin/login', { username: username, password: password }).then()
        localStorage.setItem('adminToken', data.token)
        localStorage.setItem('adminName', data.username)
        localStorage.setItem('adminId', data.id)
        setTimeout(location.reload(), 100)
        return (data);
      }
      getData(username, password);
    }
  }

  render() {
    const { username, password } = this.state;
    return <Fragment>
      {this.props.authType == 'register' ? <h1> Зарегистрируйтесь</h1> : <h1>Войдите в аккаунт</h1>}
      <form onSubmit={this.handleSubmit} className="auth__form">
        <label >
          Логин:
          <input type="text" autoComplete='off' name="username" value={username} placeholder="Ваше имя" onChange={this.handleChange} />
        </label>
        <label>
          Пароль:
          <input type="password" autoComplete='off' value={password} name="password" placeholder="Ваш пароль" onChange={this.handleChange} />
        </label>
        <button>Готово</button>
      </form>
    </Fragment>
  }
};

export default connect(
  () => ({}),
  { authUser, logout }
)(Auth);