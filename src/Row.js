import React, { Component } from 'react';
import './App.css';
import Button from './button';

class button extends Component {

  render() {
    return (
      <div>
        <Button text='hello' color='#2196F3'/>
        <Button text='hello' color='#2196F3'/>
        <Button text='hello' color='#2196F3'/>
      </div>
    );
  }
}

export default button
