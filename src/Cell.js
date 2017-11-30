import React, { Component } from 'react';
import './App.css';
import Row from './Row';

class Cell extends Component {
  render() {
    return (
      <div>
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
}

export default Cell
