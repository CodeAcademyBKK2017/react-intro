import React, { Component } from 'react';
import Row from '../Row/Row.components';

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
