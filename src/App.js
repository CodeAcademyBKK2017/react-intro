import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

// import Cell from './components/Cell/Cell.component'
// import Row from './components/Row/Row.component'
import Box from './components/Box/Box.component';

class App extends Component {
  render () {
    // const boxData = [
    //   [uuid(), [[uuid(), 'o'], [uuid(), 'x'], [uuid(), 'o']]],
    //   [uuid(), [[uuid(), 'o'], [uuid(), 'x'], [uuid(), 'x']]],
    //   [uuid(), [[uuid(), 'x'], [uuid(), 'x'], [uuid(), 'o']]],
    //   [uuid(), [[uuid(), 'x'], [uuid(), 'x'], [uuid(), 'x']]],
    //   [uuid(), [[uuid(), 'x'], [uuid(), 'o'], [uuid(), 'x'], [uuid(), 'o'], [uuid(), 'o']]]
    // ];

    return (
      <div>
        {/* <Cell cellData="O" />
        <Row rowData={['x', 'x']} /> */}
        <Box />
      </div>
    );
  }
}

export default App;
