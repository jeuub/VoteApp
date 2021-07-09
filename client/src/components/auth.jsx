import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { authUser, logout } from '../store/actions';

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
    const { username, password } = this.state;
    const { authType } = this.props;
    e.preventDefault();
    this.props.authUser(authType || 'login', { username, password });
  }
  render() {
    const { username, password } = this.state;
    return <Fragment>
      {this.props.authType == 'register'? <h1> Зарегистрируйтесь</h1>: <h1>Войдите в аккаунт</h1> }
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