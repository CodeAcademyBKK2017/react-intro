import React, {Component} from 'react';
import Box from './components/Box/Box.component';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    player: 1,
    TwoD: [
      {
        items: [' ',' ',' '],
        rowkeys: uuid()
      },
      {
        items: [' ',' ',' '],
        rowkeys: uuid()
      },
      {
        items: [' ',' ',' '],
        rowkeys: uuid()
      }
    ]
  }

  cellClickHandleCallBack = (arg,rowID,cellID) => () => {
    // let {TwoD} = this.state;
    const {player,TwoD} = this.state;
    let value = '';
    const index = TwoD.find((data,i) => data.rowkeys === rowID);
    console.log(index.items[cellID]);
    if (player === 1 && index.items[cellID] === ' ') {
      this.setState({player: 2});
      value = 'X'; 
    } else {
      this.setState({player: 1});
      value = 'O';
    }
    index.items[cellID] === ' ' ? index.items[cellID] = value : index.items[cellID] = index.items[cellID];
  }
  render () {
    return (
      <div className="App">
        <div className="App-intro">
          <Box Data={this.state.TwoD} callHandle={this.cellClickHandleCallBack}/>
        </div>
      </div>
    );
  }
}

export default App;
