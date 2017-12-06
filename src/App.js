import React, { Component } from 'react';
import Name from './Name';
import Box from './components/Box/Box.component';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    player:1
  }
  
  cellClickHandleCallBack = (arg,key)=>()=>{
    const {player} = this.state;
    player === 1?this.setState({player:2}):this.setState({player:1});
    console.log(player);
    console.log(key);
  }
  render() {
    let TwoD = [
        {
             items:[" "," "," "],
             rowkeys:uuid()
        },
        {
            items:[" "," "," "],
            rowkeys:uuid()
        },
        {
            items:[" "," "," "],
            rowkeys:uuid()
        }
      ]
    return (
      <div className="App">
        <div className="App-intro">
         <Name name="TicTacToe"/>
         <Box Data = {TwoD} key={uuid()} callHandle = {this.cellClickHandleCallBack}/>
        </div>
      </div>
    );
  }
}

export default App;
