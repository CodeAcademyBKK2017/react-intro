import React from 'react';
import './App.css';
import Box from './Component/Box/Box.component';
import uuid from 'uuid';

const valueData = [
  {
    value : ['x','o','o'],
    key : uuid()
  },{
    value : ['x','x','o'],
    key : uuid()
  },{
    value : ['o','x','o'],
    key : uuid()
  }
];

const clickHandler = (value) => () => console.log('On ClickHandler & value true :',value);

const App = () => (
  <div className="App">
    <p>My Design</p>
    <Box valueData = {valueData} clickHandler = {clickHandler}/>
  </div>
);

export default App;
