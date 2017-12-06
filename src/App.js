import React, { Component } from 'react';
import uuid from 'uuid';
import Box from './Component/Box/Box.component';

const boxData = [
        
        {
          value:['o','x','o'],
          key:uuid()
        },
        {
          value:['x','x','o'],
          key:uuid()
        },
        {
          value:['o','x','x'],
          key:uuid()
        }
      ]
const App =()=><Box class='box' data = {boxData} name ='Nanny'/>


export default App;
