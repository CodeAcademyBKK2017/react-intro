import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Cell from './components/Cell/Cell.component'
import Row from './components/Row/Row.component'
import Box from './components/Box/Box.component'

class App extends Component {
  render() {
    const boxData = [
      ['o', 'x', 'o'],
      ['o', 'x', 'x'],
      ['x', 'x', 'o']
    ];
    return (
      <div>
        {/* <Cell cellData="O" />
        <Row rowData={['x', 'x']} /> */}
        <Box boxData={boxData} />
      </div>
    );
  }
}

export default App;
