import React,{ Component } from 'react';
import Cell from '../Cell/Cell.component'

class Row extends Component {
  render() {
    return (
        <div>
        <Cell value={this.props.cellData[0]} color="black"/><Cell value={this.props.cellData[1]} color="black"/><Cell value={this.props.cellData[2]} color="black"/>
        </div>
    );
  }
}

export default Row
