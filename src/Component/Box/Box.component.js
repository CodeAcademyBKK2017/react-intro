import React, { Component } from 'react';
import Row from '../Row/Row.component';

class Box extends Component {
  render() {
    const my = this.props;
    return (
      <div>
        <Row cellData = {my.valueData[0]} clickHandler = {my.clickHandler}/>
        <Row cellData = {my.valueData[1]} clickHandler = {my.clickHandler}/>
        <Row cellData = {my.valueData[2]} clickHandler = {my.clickHandler}/>
      </div>
    );
  }
}

export default Box
