import React,{ Component } from 'react';
import './Cell.style.css';

class Cell extends Component {

  render() {
    const {value} = this.props
    const color = value === 'O'?'blue':'red';
    return (
      <div className="Cell" style={{backgroundColor:color}} onClick={this.props.clickHandle(value)}>{value}</div>
    );
  } 
}

export default Cell
