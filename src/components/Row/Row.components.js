import React, { Component } from 'react';
import Cell from '../Cell/Cell.components';

class Row extends Component {
  render() {
      const style = {
        marginTop: "44px",
      };
    return (
        <div style={style}>
            <Cell name={ this.props.cellData[0] }/> <Cell name={ this.props.cellData[1] }/> <Cell name={ this.props.cellData[2] }/>
        </div>
    );
  }
}

export default Row;
