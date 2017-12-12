import React, {Component} from 'react';
import './App.css';
import Box from './Component/Box/Box.component';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <p>Welcome to Game</p>
        <p>TIC TAG TOE</p>
        <Box />
        <p className='fixBottom'>MADE BY PANURUT OUNWONG</p>
      </div>
    );
  }
}

export default App;
