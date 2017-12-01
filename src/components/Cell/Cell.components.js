import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  render() {
    return (
        <div className="cell-box">
            { this.props.name }
        </div>
    );
  }
}

export default Cell;
