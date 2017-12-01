import React, { Component } from 'react';
import './App.css';
import Box from './Component/Box/Box.component';

class App extends Component {
  render() {
    let valueData = [
      ['o','x','o'],
      ['x','o','o'],
      ['x','x','o']
    ];
    return (
      <div className="App">
        <p>My Design</p>
        <Box data = {valueData}/>
      </div>
    );
  }
}

export default App;
