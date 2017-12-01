import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello/Hello.component';
import Box from './components/Box/Box.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Hello name="Chong" test={{test:123}}/>
        
        {/* <Cell text="O"/> */}
        {/* <Row /> */}
        <Box rowData={[
          ["O", "X", "O"],
          ["X", "O", "O"],
          ["X", "X", "O"]
        ]} />
      </div>
    );
  }
}

export default App;
