import React, { Component } from 'react';
import './App.css';
import Name from './Name';
import Box from './Box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
         <Name name="TicTacToe"/>
         <Box/>
        </p>
      </div>
    );
  }
}

export default App;
