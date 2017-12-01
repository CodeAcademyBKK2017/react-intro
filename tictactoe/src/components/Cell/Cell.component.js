import React from 'react';
import './Cell.style.css';

class Cell extends React.Component {
  render() {
    return (
      <div className={`Cell-button Cell-button__${this.props.color}`} onClick={this.props.cellClickHandler(this.props.cellData)}>
        {this.props.cellData}
      </div>
    );
  }
}

export default Cell;
