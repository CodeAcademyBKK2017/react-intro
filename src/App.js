import React, { Component } from 'react';
import Name from './Name';
import Box from './components/Box/Box.component';
import './App.css';

class App extends Component {
  state = {
    player:1
  }
  
  cellClickHandleCallBack = (arg)=>()=>{
    const {player} = this.state;
    player === 1?this.setState({player:2}):this.setState({player:1});
    console.log(player);
  }
  render() {
    let TwoD = [
                  ['?','?','?'],
                  ['?','?','?'],
                  ['?','?','?']
                ]
    return (
      <div className="App">
        <div className="App-intro">
         <Name name="TicTacToe"/>
         <Box Data = {TwoD} callHandle = {this.cellClickHandleCallBack}/>
        </div>
      </div>
    );
  }
}

export default App;
