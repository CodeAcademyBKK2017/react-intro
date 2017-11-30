import React, { Component } from 'react';
import Cell from '../Cell/Cell.componant';

class Row extends Component {

  render() {
    return (
      <div>
        <Cell text='x' color='#2196F3'/>
        <Cell text='x' color='#2196F3'/>
        <Cell text='x' color='#2196F3'/>
      </div>
    );
  }
}

export default Row
