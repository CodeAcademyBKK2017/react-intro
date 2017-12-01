import React, { Component } from 'react';
import Row from '../Row/Row.components';

class Box extends Component {
  render() {
    const titacto = 
      [
        ['O', 'X', 'O'],
        ['X', 'O', 'O'],
        ['X', 'X', 'O']
      ];
    return (
        <div>
            <Row cellData={ titacto[0] }/> <Row cellData={ titacto[1] }/> <Row cellData={ titacto[2] }/>
        </div>
    );
  }
}

export default Box;
