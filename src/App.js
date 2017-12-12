import React, {Component} from 'react';
import './App.css';
import Box from './Component/Box/Box.component';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <p>My Tictagtoe</p>
        <Box />
      </div>
    );
  }
}

export default App;
