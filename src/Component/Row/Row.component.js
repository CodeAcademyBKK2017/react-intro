import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';

class Row extends Component {

  render() {
    const my = this.props;
    return (
      <div>
        <Cell text={my.cellData[0]} color='#2196F3' clickHandler={my.clickHandler}/>
        <Cell text={my.cellData[1]} color='#2196F3' clickHandler={my.clickHandler}/>
        <Cell text={my.cellData[2]} color='#2196F3' clickHandler={my.clickHandler}/>
      </div>
    );
  }
}

export default Row
