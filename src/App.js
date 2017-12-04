import React, { Component } from 'react';
import './App.css';
import Box from './Component/Box/Box.component';

class App extends Component {
  state = {
    team : true, // A true,B false
    a : 'X',
    b : 'O'
  }
  turn = true;
  clickHandler = (value) => () => {
    if (this.state.team) {
      console.log('On ClickHandler & value true :',value);
      this.setState({
        team : false
      });
    } else {
      console.log('On ClickHandler & value false :',value);
      this.setState({
        team : true
      });
    }
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
