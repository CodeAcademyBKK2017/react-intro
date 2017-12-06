import React, {Component} from 'react';
import Box from './components/Box/Box.component';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    
  }

  render () {
    const data = [
      ['o','x','o'],
      ['x','o','x'],
      ['o',' ','o']
    ];

    return (
      <div className="App">
        <Box data={data} />
      </div>
    );
  }
}

export default App;
