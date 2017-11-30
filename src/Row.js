import React,{ Component } from 'react';
import Cell from './Cell'

class Row extends Component {
  render() {
    return (
        <div>
        <Cell text="x" color="#428ff4"/><Cell text="x" color="#428ff4"/><Cell text="x" color="#428ff4"/>
        </div>
    );
  }
}

export default Row
