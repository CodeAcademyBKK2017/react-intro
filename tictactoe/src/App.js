import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Cell from './components/Cell/Cell.component'
import Row from './components/Row/Row.component'
import Box from './components/Box/Box.component'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Cell text="O" color="red" />
        <Row numberOfCell="3" />
        <Row numberOfCell="5" /> */}
        <Box numberOfRow="3" numberOfCell="3" />
      </div>
    );
  }
}

export default App;
