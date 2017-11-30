import React, { Component } from 'react';
import Cell from '../Cell/Cell';

class Row extends Component {
  render() {
      const style = {
        marginTop: "44px",
      };
    return (
        <div style={style}>
            <Cell name="C1"/> <Cell name="C2"/> <Cell name="C3"/>
        </div>
    );
  }
}

export default Row;
