import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import uuid from 'uuid';

// import Cell from './components/Cell/Cell.component'
// import Row from './components/Row/Row.component'
import Box from './components/Box/Box.component';

class App extends Component {
  render () {
    // const boxData = [
    //   ['o', 'x', 'o'],
    //   ['o', 'x', 'x'],
    //   ['x', 'x', 'o'],
    //   ['x', 'x', 'x'],
    //   ['x', 'o', 'x', 'o', 'o'],
    //   []
    // ];
    const boxData = [
      [uuid().toString(), [[uuid().toString(), 'o'], [uuid().toString(), 'x'], [uuid().toString(), 'o']]],
      [uuid().toString(), [[uuid().toString(), 'o'], [uuid().toString(), 'x'], [uuid().toString(), 'x']]],
      [uuid().toString(), [[uuid().toString(), 'x'], [uuid().toString(), 'x'], [uuid().toString(), 'o']]],
      [uuid().toString(), [[uuid().toString(), 'x'], [uuid().toString(), 'x'], [uuid().toString(), 'x']]],
      [uuid().toString(), [[uuid().toString(), 'x'], [uuid().toString(), 'o'], [uuid().toString(), 'x'], [uuid().toString(), 'o'], [uuid().toString(), 'o']]]
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
