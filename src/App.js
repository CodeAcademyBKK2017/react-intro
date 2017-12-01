import React, { Component } from 'react';
import './App.css';
import Box from './Component/Box/Box.component';

class App extends Component {
  turn = true;
  clickHandler = (value) => () => {
    console.log('On ClickHandler & value :',value);
    // if (this.turn) {
    //   console.log('On ClickHandler & value true :',value);
    //   this.turn = false;
    // } else {
    //   console.log('On ClickHandler & value false :',value);
    //   this.turn = true;
    // }
  }
  render() {
  const valueData = [
      ['x','o','o'],
      ['o','x','o'],
      ['x','x','o']
    ];
    return (
      <div className="App">
        <p>My Design</p>
        <Box valueData = {valueData} clickHandler = {this.clickHandler}/>
      </div>
    );
  }
}

export default App;
