import React, { Component } from 'react';
import Name from './Name';
import Box from './components/Box/Box.component';
import './App.css';

class App extends Component {
  // constructor = (player)=>{
  //   this.player = player;
  // }
  // App.prototype.getHost = function(){return this.host}

  cellClickHandleCallBack = (arg)=>()=>{
    console.log(arg);
    console.log(this.TwoD);
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
