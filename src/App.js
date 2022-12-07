import React, { Component } from 'react';
// import Header from './components/Heder';
import Container from './components/Container';
import Test from './components/TestComponent';
import Form from './components/Form';
import './App.css';
import dbData from './db/db.json';

class App extends Component {
  state = {
    data: dbData,
  };

  handleGetData = ({ name, nick, email }) => {
    //для генерації id встановити акет shortid
    const newData = {
      name,
      nick,
      email,
      id: 'id-33',
    };

    this.setState(prevState => {
      console.log(prevState);
      return { data: [newData, ...prevState.data] };
    });

    console.log(newData);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Container>
          {/* <Header /> */}
          <Form onSubmit={this.handleGetData} />
          <Test />
        </Container>
      </div>
    );
  }
}

export default App;
