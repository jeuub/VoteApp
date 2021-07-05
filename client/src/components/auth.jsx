import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authUser, logout} from '../store/actions';

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
    const {username, password} = this.state;
    const {authType} = this.props;
    e.preventDefault();
    this.props.authUser(authType || 'login', {username, password});
  }
  render() {
    const { username, password } = this.state;
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" name="username" value={username} placeholder="Ваше имя" onChange={this.handleChange} />
        </label>
        <label>
          <input type="password" value={password} name="password" placeholder="Ваш пароль" onChange={this.handleChange} />
        </label>
        <button>Готово</button>
      </form>
    </div>
  }
};

export default connect(
  ()=>({}), 
  {authUser, logout}
)(Auth);