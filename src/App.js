import './App.css';
import Box from './components/Box/Box.component';
import React, {Component} from 'react';
class App extends Component {
  render () {
    return (
      <div className={'app'}>
        <div className='app-header'>Welcome to TIC TAC TO</div>
        <Box />
        <div className={'made-by'}>MADE BY BEN </div>
      </div>
      
    );
  }
}

export default App;
