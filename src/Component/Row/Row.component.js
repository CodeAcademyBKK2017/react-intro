import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';

class Row extends Component {

  render() {
    return (
      <div>
        <Cell text={this.props.cellData[0]} color='#2196F3'/>
        <Cell text={this.props.cellData[1]} color='#2196F3'/>
        <Cell text={this.props.cellData[2]} color='#2196F3'/>
      </div>
    );
  }
}

export default Row
