import React, {Component} from 'react';
import './App.css';
import Box from './components/Box/Box.component';
class App extends Component {
  render () {
    const bData = [['O','X','O'],['X','O','O'],['X','X','O']];
    return (
      <div>
        <Box boxData={bData} />
      </div>
    );
  }
}

export default App;
