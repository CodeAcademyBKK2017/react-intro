import React, { Component } from 'react';
// import logo from './logo.svg';
import Box from './Component/Box/Box.component';
// import './App.css';

class App extends Component {
  render() {
    const boxData = [
      ['o','x','o'],
      ['x','x','o'],
      ['o','x','x'],
    ]
    return (
      <Box class='box' data = {boxData} name ='Nanny'/>
    );
  }
}

export default App;
