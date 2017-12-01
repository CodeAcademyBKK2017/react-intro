import React, { Component } from 'react';
import Box from './components/Box/Box.component'
//import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    const boxData = [
      ['o','x','o'],
      ['x','x','x'],
      ['o','x','o']
    ]

    return (
      <Box data={boxData} style={{textAlign:'center'}} />
    );
  }
}

export default App;