import React, {Component} from 'react';
import Box from './components/Box/Box.component';
import './App.css';

class App extends Component {

  render () {
    return (
      <div className="App">
        <div className="app-name">Tic-Tac-Toe</div>
        <div className="app-sub">Game start</div>
        <Box />
        <div className="credit">MADE BY <b>JACK</b></div>
      </div>
    );
  }
}

export default App;