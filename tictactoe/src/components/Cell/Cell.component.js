import React from 'react';
import './Cell.style.css';

class Cell extends React.Component {
  render() {
    return (
      <div className={`Cell-button Cell-button__${this.props.color}`}>
        {this.props.text}
      </div>
    );
  }
}

export default Cell;
