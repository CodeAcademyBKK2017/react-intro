import './App.css';
import Box from './components/Box/Box.component';
import React, {Component} from 'react';
class App extends Component {
  render () {
    return (
      <div className={'app'}>
        <Box />
        <div className={'made-by'}>MADE BY BEN </div>
      </div>
      
    );
  }
}

export default App;
