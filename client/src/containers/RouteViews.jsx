import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import AuthPage from '../pages/AuthPage';
import Landing from '../pages/Landing';
import PollsPage from '../pages/PollsPage';
import PollPage from '../pages/PollPage';
import CreatePollPage from '../pages/CreatePollPage';
import { getCurrentPoll } from '../store/actions';

const RouteViews = ({ auth, getCurrentPoll }) =>
  <Fragment>
    <Switch>
      <Route exact path="/login" render={() => <AuthPage authType={'login'} isAuthenticated={auth.isAuthenticated} />} />
      <Route exact path="/register" render={() => <AuthPage authType={'register'} isAuthenticated={auth.isAuthenticated} />} />
      <Route exact path="/landing" render={() => <Landing />} />
      <Route exact path="/" render={props => <PollsPage  {...props} />} />
      <Route exact path="/poll/:id" render={props => <PollPage getPoll={id => getCurrentPoll(id)} {...props} />} />
      <Route exact path="/create" render={()=> <CreatePollPage isAuthenticated={auth.isAuthenticated}/>} />
    </Switch>
  </Fragment>;

export default withRouter(connect(store => ({ auth: store.auth }), { getCurrentPoll })(RouteViews));