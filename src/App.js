import React, {Component} from 'react';
import Box from './components/Box/Box.component';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="App-intro">
          <Box/>
        </div>
        <div className="KD">Made By KingDark</div>
      </div>
    );
  }
}

export default App;
