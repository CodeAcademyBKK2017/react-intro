import './App.css';
import Box from './components/Box/Box.component';
import React, {Component} from 'react';

class App extends Component {

  // bData = [
  //   {
  //     'items': [
  //       'O',
  //       'X',
  //       'O'
  //     ],
  //     'id': uuid()
  //   },
  //   {
  //     'items': [
  //       'X',
  //       'O',
  //       'O'
  //     ],
  //     'id': uuid()
  //   },
  //   {
  //     'items': [
  //       'X',
  //       'X',
  //       'O'
  //     ],
  //     'id': uuid()
  //   }
  // ];

  render () {

    return (
      <div>
        <Box />
      </div>
    );

  }

}

export default App;
