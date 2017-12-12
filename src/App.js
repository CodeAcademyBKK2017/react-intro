import React, {Component} from 'react';
import Box from './components/Box/Box.component';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="HeaderClass"><b>TIC</b></div>
        <div className="HeaderClass"><b>TAC</b></div>
        <div className="HeaderClass"><b>TOE</b></div>
        <div className="App-intro">
          <div class="boxCss">
            <Box/>
          </div>
        </div>
        <div className="KD"><span>Made By</span> <b>KingDark</b></div>
      </div>
    );
  }
}

export default App;
