import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getPolls, getUserPolls, getCurrentPoll } from '../store/actions';

class Polls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pollsOwner: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    const { getPolls } = this.props;
    getPolls();
  };
  handleSelect(id) {
    const { history } = this.props;
    history.push(`/poll/${id}`);
    const { getCurrentPoll } = this.props;
    getCurrentPoll(id);
  };
  render() {
    const { auth, getPolls, getUserPolls } = this.props;
    const polls = this.props.polls.map(poll => (<li className="polls__container__poll" onClick={() => this.handleSelect(poll._id)} key={poll._id}>{poll.question}<br/> { poll.user.username?<span>Автор: {poll.user.username}</span>:null}</li>))
    return <Fragment>
      {auth.isAuthenticated && (
        <div className="polls__options">
          <input id="pollsOwner_all" onClick={getPolls} defaultChecked type="radio" name="pollsOwner" />
          <label htmlFor="pollsOwner_all">
            Все голосования
          </label>
          
          <input id="pollsOwner_my" onClick={getUserPolls} type="radio" name="pollsOwner" />
          <label htmlFor="pollsOwner_my">
            Мои голосования
          </label>
        </div>
      )}
      <h1 className="polls__title">Голосования</h1>
      <ul className="polls__container">
        {polls}
      </ul>
    </Fragment>
  }
}

export default connect(
  store => ({
    auth: store.auth,
    polls: store.polls
  }), { getPolls, getUserPolls, getCurrentPoll })(Polls);