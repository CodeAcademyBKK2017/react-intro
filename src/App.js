import React, {Component} from 'react';
import './App.css';
import Box from './Component/Box/Box.component';
import uuid from 'uuid';

class App extends Component {
  state = {
    turn: true,
    boxData: [
      {value: ['','',''],key: uuid()},
      {value: ['','',''],key: uuid()},
      {value: ['','',''],key: uuid()}
    ]
  };
  cellOnClick = (row,cell) => () => {
    if (this.state.boxData[row].value[cell] === '') {
      let newBoxData = [...this.state.boxData];
      if (this.state.turn) {
        newBoxData[row].value[cell] = 'X';
        this.setState({turn: false});
      } else {
        newBoxData[row].value[cell] = 'O';
        this.setState({turn: true});
      }
      this.setState({boxData: newBoxData});
    }
  }
  resetBoxData = () => {
    this.setState({
      turn: true,
      boxData: [
        {value: ['','',''],key: uuid()},
        {value: ['','',''],key: uuid()},
        {value: ['','',''],key: uuid()}
      ]
    });
  }
  checkWinner = () => {
    // 00 01 02
    // 00 11 22
    // 00 10 20
    // if ()
  }
  render () {
    return (
      <div className="App">
        <p>My Tictagtoe</p>
        <Box valueData = {this.state.boxData} cellOnClick = {this.cellOnClick}/>
        <button onClick = {this.resetBoxData}><p>Reset</p></button>
      </div>
    );
  }
}

export default App;
