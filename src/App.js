import React, { Component } from 'react';
import Name from './Name';
import Box from './components/Box/Box.component';
import './App.css';

class App extends Component {
  render() {
    const TwoD = [
                  ['O','X','O'],
                  ['X','O','O'],
                  ['X','X','O']
                ]
    return (
      <div className="App">
        <div className="App-intro">
         <Name name="TicTacToe"/>
         <Box Data = {TwoD}/>
        </div>
      </div>
    );
  }
}

export default App;
