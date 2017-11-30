import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Hello';
import Cell from './Cell';
import Row from './Row';
import Box from './Box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Hello name="Chong" test={{test:123}}/>
        
        {/* <Cell text="O"/> */}
        {/* <Row /> */}
        <Box value={[
          ["X", "O", "O"],
          ["O", "X", "O"],
          ["O", "O", "X"]
        ]} />
      </div>
    );
  }
}

export default App;
