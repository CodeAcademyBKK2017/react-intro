import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  render() {
    return (
        <div className="cell-box" onClick={this.props.cellClickHandler(this.props.name)}>
            { this.props.name }
        </div>
    );
  }
}

export default Cell;
