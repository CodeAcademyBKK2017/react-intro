import React, { Component } from 'react';
import Box from './components/Box/Box.component';
import './App.css';

class App extends Component {
  render() {
    const data = [['o','x','o'],['x','o','x'],['o','x','o']];

    return (
      <div className="App">
        <Box data={data} />
      </div>
    )
  }
}

export default App;
