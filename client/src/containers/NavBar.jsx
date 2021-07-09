import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions';
const NavBar = ({ auth, logout }) => <header className="header">
  <div className="header__logo">
    VOI <br/>
    CER <span>.</span>
  </div>
  <nav>
    <ul>
      <li>
        <Link to="/landing"> <i className="fas fa-newspaper"></i> <span>Основная </span></Link>
      </li>
      <li>
        <Link to= "/"> <i className="fas fa-poll-h"></i> <span> Голосования </span></Link>
      </li>
      {!auth.isAuthenticated ?
        <li>
          <Link to="/register"> <i className="far fa-plus-square"></i> <span> Регистрация </span> </Link>
        </li> : null
      }
      {!auth.isAuthenticated ?
        <li>
          <Link to="/login"><i className="fas fa-sign-in-alt"></i> <span> Войти </span> </Link>
        </li> : null
      }
      {auth.isAuthenticated ?
        <li>
          <Link to="/create"> <i className="far fa-plus-square"></i> <span> Создать </span> </Link>
        </li> : null
      }
      {auth.isAuthenticated ? <button className="header__logout" onClick={logout} > <i className="fas fa-door-closed"></i> <span> Выйти</span> </button> : null}
    </ul>
  </nav>
</header>

export default connect(store => ({ auth: store.auth }), { logout })(NavBar);


