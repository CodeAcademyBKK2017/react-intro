import React, { Component } from 'react';
import Name from './Name';
import Box from './components/Box/Box.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
         <Name name="TicTacToe"/>
         <Box/>
        </div>
      </div>
    );
  }
}

export default App;
