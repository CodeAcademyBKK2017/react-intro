import React, {Component} from 'react';
import './App.css';
import Box from './Component/Box/Box.component';
import uuid from 'uuid';

function cellOnClick (arg) {
  console.log('Cell onClick :',arg);
}

class App extends Component {
  valueData = [
    {value: ['x','o','o'],key: uuid()},
    {value: ['x','x','o'],key: uuid()},
    {value: ['o','x','o'],key: uuid()}
  ];
  
  render () {
    return (
      <div className="App">
        <p>My Tictagtoe</p>
        <Box valueData = {this.valueData} cellOnClick = {cellOnClick}/>
      </div>
    );
  }
}

export default App;
