import React, { Component } from 'react';

import './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    nick: '',
    email: '',
  };

  ///введення даних в поля вводу
  handleOnChenge = event => {
    const { name, value } = event.currentTarget;

    // console.log(value, name);

    this.setState({
      [name]: value,
    });
  };

  //сабміт форми, передача даних через проп this.props...
  handleOnSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    console.log('Form submit Ok');
    this.handelResetFormData();
  };

  ///скдання форми
  handelResetFormData = () => {
    this.setState({
      name: '',
      nick: '',
      email: '',
    });
  };

  render() {
    const { name, nick, email } = this.state;
    return (
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <label>
            Name
            <input
              type="text"
              name="name"
              onChange={this.handleOnChenge}
              value={name}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Nick
            <input
              type="text"
              name="nick"
              onChange={this.handleOnChenge}
              value={nick}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Email
            <input
              type="text"
              name="email"
              onChange={this.handleOnChenge}
              value={email}
            ></input>
          </label>
        </p>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Form;
