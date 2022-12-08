import React, { Component } from 'react';
import shortid from 'shortid';
// import Header from './components/Heder';
import Container from './components/Container';
// import Test from './components/TestComponent';
import Form from './components/Form';
import ListView from './components/ListView';
import './App.css';
import dbData from './db/db.json';

class App extends Component {
  state = {
    data: dbData,
  };

  handleGetData = ({ name, nick, email }) => {
    const newData = {
      name,
      nick,
      email,
      id: shortid.generate(),
    };

    this.setState(prevState => {
      console.log(prevState);
      return { data: [newData, ...prevState.data] };
    });

    console.log(newData);
    console.log(this.state);
  };

  handleDeleteEntry = id => {
    // console.log(id);

    this.setState(prevState => ({
      data: prevState.data.filter(item => item.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <Container>
          {/* <Header /> */}
          <Form onSubmit={this.handleGetData} />
          <ListView
            dataShow={this.state.data}
            onDelete={this.handleDeleteEntry}
          />
          {/* <Test /> */}
        </Container>
      </div>
    );
  }
}

export default App;
