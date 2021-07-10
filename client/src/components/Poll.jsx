import React from 'react';
import { connect } from 'react-redux';
import { vote } from '../store/actions';
import { Doughnut } from 'react-chartjs-2';
import { useHistory } from "react-router-dom";

const color = () => {
  return (`#${Math.random().toString(16).slice(2, 8)}`)
};

const Poll = ({ poll, vote }) => {
  let answers = null;
  if (poll.options) {
    answers = poll.options.map(option => (
      <button key={option._id} onClick={() => vote(poll._id, { answer: option.option })}>{option.option} : {option.votes}</button>
    ))
  }
  let data = null;
  let leader = {
    votes: 0,
    option: ''
  };
  if (poll.options !== undefined) {
    data = {
      labels: poll.options.map(option => option.option),
      datasets: [
        {
          label: poll.question,
          backgroundColor: poll.options.map(() => color()),
          borderColor: 'transparent',
          data: poll.options.map(option => option.votes)
        }
      ]
    }
    poll.options.map(function (option) {
      if (option.votes > leader.votes) {
        leader.votes = option.votes;
        leader.option = option.option;
      }
    });
  }
  return (
    <div className="poll">
      <h1 className="poll__title">{poll.question}</h1>
      {poll.user ? <h3 className="poll__title__author">Автор: <b>{poll.user.username} </b> </h3> : null}
      <div className="poll__content">
        <div className="poll__content__main">
          <div className="poll__content__answers">{answers}</div>
          {leader.option ? <h2 className="poll__title">Побеждает вариант  {leader.option}</h2> : null}
        </div>
        <div className="poll__content__graph">
          <Doughnut data={data} />
        </div>
      </div>
    </div>)
}
export default connect(store => ({
  poll: store.currentPoll
}), { vote })(Poll);