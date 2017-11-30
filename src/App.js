import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello/Hello.component';
import Cell from './components/Cell/Cell.component';
import Row from './components/Row/Row.component';
import Box from './components/Box/Box.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        
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
