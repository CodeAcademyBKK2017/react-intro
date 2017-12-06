import React, { Component } from 'react';
import Box from './components/Box/Box.component';
import uuid from 'uuid';
const boxData = [
  {
    value:['o','x','o'],
    key:uuid()
  },
  {
    value:['x','x','x'],
    key:uuid()
  },
  {
    value:['o','x','o'],
    key:uuid()
  }
]
const App = (props) =><Box data={boxData} style={{textAlign:'center'}} />

export default App;