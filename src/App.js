import React, { Component } from 'react';
import './App.css';
import Box from './Component/Box/Box.component';

class App extends Component {
  clickHandler = (value) => () => {
    console.log('On ClickHandler & value true :',value);
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
