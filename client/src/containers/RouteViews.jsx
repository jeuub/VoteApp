import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import AuthPage from '../pages/AuthPage';
import Landing from '../pages/Landing';
import PollsPage from '../pages/PollsPage';
import PollPage from '../pages/PollPage';
import CreatePollPage from '../pages/CreatePollPage';
import { getCurrentPoll } from '../store/actions';
import ProfilePage from '../pages/ProfilePage';
import AdminLogin from '../pages/AdminLogin';
import AdminPanel from '../pages/AdminPanel';

const RouteViews = ({ auth, getCurrentPoll }) =>
  <Fragment>
    <Switch>
      <Route exact path="/login" render={() => <AuthPage authType={'login'} isAuthenticated={auth.isAuthenticated} />} />
      <Route exact path="/register" render={() => <AuthPage authType={'register'} isAuthenticated={auth.isAuthenticated} />} />
      <Route exact path="/landing" render={() => <Landing />} />
      <Route exact path="/" render={props => <PollsPage  {...props} />} />
      <Route exact path="/poll/:id" render={props => <PollPage getPoll={id => getCurrentPoll(id)} {...props} />} />
      <Route exact path="/create" render={()=> <CreatePollPage isAuthenticated={auth.isAuthenticated}/>} />
      <Route exact path="/me" render={props=> <ProfilePage isAuthenticated={auth.isAuthenticated} name={auth.user.username} id={auth.user.id} {...props}/>} />
      <Route exact path="/admin" render={props=> <AdminLogin {...props}/>} />
      <Route exact path="/adminPanel" render={props=> <AdminPanel {...props}/>} />
    </Switch>
  </Fragment>;

export default withRouter(connect(store => ({ auth: store.auth }), { getCurrentPoll })(RouteViews));