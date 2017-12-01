import React, { Component } from 'react';
import Cell from '../Cell/Cell.components';

class Row extends Component {
  render() {
      const style = {
        marginTop: "44px",
      };
    return (
        <div style={style}>
            <Cell name={ this.props.cellData[0] } cellClickHandler={this.props.cellClickHandler}/> <Cell name={ this.props.cellData[1] } cellClickHandler={this.props.cellClickHandler}/> <Cell name={ this.props.cellData[2] } cellClickHandler={this.props.cellClickHandler}/>
        </div>
    );
  }
}

export default Row;
