import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './Hello';
import Cell from './Cell';
import Row from './Row';
import Box from './Box';

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
