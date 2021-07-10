import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { createPoll } from '../store/actions'
class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      options: [''],
    }
    this.handleChange = this.handleChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.removeAnswer = this.removeAnswer.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  addAnswer() {
    this.setState({ options: [...this.state.options, ''] });
  }
  removeAnswer() {
    if (this.state.options.length > 2) {
      let newOptions = this.state.options.splice(0, this.state.options.length - 1,)
      this.setState({ options: newOptions });
    }
  }
  handleAnswer(e, index) {
    const options = [...this.state.options];
    options[index] = e.target.value;
    this.setState({ options });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPoll(this.state);
    this.setState({ question: '' });
    this.setState({ options: [''] });
    document.querySelector('.create_poll__done').style.opacity = '1';
    setTimeout(() => document.querySelector('.create_poll__done') ? document.querySelector('.create_poll__done').style.opacity = '0' : null, 3000)
  }
  render() {

    const options = this.state.options.map((options, idx) => (
      <Fragment key={idx}>
        <label>
          Вариант №{idx + 1}:
          <input
            type="text"
            required
            value={options}
            onChange={e => this.handleAnswer(e, idx)}
          />
        </label>
      </Fragment>
    ));
    return (
      <Fragment>
        <div className="create_poll__done">Готово!</div>
        <form className="create_poll" onSubmit={e => this.handleSubmit(e)}>
          <label>Вопрос:
            <input type="text" required
              name='question'
              value={this.state.question}
              onChange={this.handleChange}
            />
          </label>
          {options}
          <button type="button" onClick={this.removeAnswer}>Убрать вариант</button>
          <button type="button" onClick={this.addAnswer}>Добавить вариант</button>
          <button type="submit">Создать</button>
        </form>
      </Fragment>
    )
  }
}

export default connect(() => ({}), { createPoll })(CreatePoll);