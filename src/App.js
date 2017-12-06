import React, {Component} from 'react';
import Box from './components/Box/Box.component';
import './App.css';
import uuid from 'uuid';

class App extends Component {
  state = {
    data: [
      {id: uuid(), items: [
        {id: uuid(), title: 'o'},
        {id: uuid(), title: 'x'},
        {id: uuid(), title: 'o'},
      ]},
      {id: uuid(), items: [
        {id: uuid(), title: 'x'},
        {id: uuid(), title: 'o'},
        {id: uuid(), title: 'x'},
      ]},
      {id: uuid(), items: [
        {id: uuid(), title: 'o'},
        {id: uuid(), title: 'x'},
        {id: uuid(), title: 'o'},
      ]},
    ]
  };

  render () {
    return (
      <div className="App">
        <Box data={this.state.data} />
      </div>
    );
  }
}

export default App;
