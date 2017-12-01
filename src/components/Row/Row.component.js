import React,{ Component } from 'react';
import Cell from '../Cell/Cell.component'

class Row extends Component {
  render() {
      const {cellData,clickHandle} = this.props;
    return (
        <div>
        <Cell value={cellData[0]} color="black" clickHandle={clickHandle}/>
        <Cell value={cellData[1]} color="black" clickHandle={clickHandle}/>
        <Cell value={cellData[2]} color="black" clickHandle={clickHandle}/>
        </div>
    );
  }
}

export default Row
