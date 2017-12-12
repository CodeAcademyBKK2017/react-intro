import './App.css';
import Box from './components/Box/Box.component';
import React, {Component} from 'react';
class App extends Component {
  render () {
    return (
      <div className={'app'}>
        <Box />
        <p className={'madeby'}>MADE BY BEN </p>
      </div>
      
    );
  }
}

export default App;
