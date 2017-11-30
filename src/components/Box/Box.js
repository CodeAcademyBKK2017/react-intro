import React, { Component } from 'react';
import Row from '../Row/Row';

class Box extends Component {
  render() {
    return (
        <div>
            <Row/> <Row/> <Row/>
        </div>
    );
  }
}

export default Box;
