import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Hello from './Hello'
import Button from './Button'
import Cell from './Cell'
import Row from './Row'
import Box from './Box'

class App extends Component {
  render() {
    return (
      <div>
        {/* <Hello name="Teeraphong" />
        <Hello name="ธีรพงศ์" />
        <Button text="BUTTON"/> <Button text="คลิกซิจ๊ะ"/> */}
        {/* <Cell text="O" color="red" />
        <Row numberOfCell="3" />
        <Row numberOfCell="5" /> */}
        <Box numberOfRow="3" numberOfCell="4" />
      </div>
    );
    // const a = <Hello name="Teeraphong" />
    // const b = <Hello name="ธีรพงศ์" />
    // return (
    //   [a, b]
    // );
  }
}

export default App;
