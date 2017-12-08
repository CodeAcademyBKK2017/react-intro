import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import replaceIndex from 'replace-array-index';
import uuid from 'uuid';


class Box extends Component {
  state = {
    bData: [
      {
        'items': ['', '', ''],
        'id': uuid()
      },
      {
        'items':  ['', '', ''],
        'id': uuid()
      },
      {
        'items':  ['', '', ''],
        'id': uuid()
      }
    ],
    isXNext: true
  }

  getUpdatedCells = (oldState, rowID, cellIndex, isXNext) => {
    const foundRow = oldState.find((rowData) => rowData.id === rowID);
    if (!foundRow) {
      return;
    }
    const selectedRowIndex = oldState.indexOf(foundRow);
    const newCellValue = isXNext ? 'X' : 'O';
    const items = replaceIndex(foundRow.items, cellIndex, newCellValue);
    const updatedRow = {id: rowID, items};
    const newBoxData = replaceIndex(oldState, selectedRowIndex, updatedRow);
    return newBoxData;
  }

  getWinner = (boxState) => 'X' // Write logic here

  cellclickHandler = (rowID, cellIndex) => () => {
    const {bData, isXNext} = this.state;
    const newbData = this.getUpdatedCells(bData, rowID, cellIndex, isXNext);
    if (bData) {
      this.setState({bData: newbData, isXNext: !isXNext});
      const winner = this.getWinner(newbData);
      if (winner) {
        alert('Winner is: ' +  winner);
      }
    }
  }

  createRow = (rowData) => <Row cellData={rowData.items}
    key={rowData.id} rowID={rowData.id} cellclickHandler={this.cellclickHandler} />

  render () {
    const rowItems = this.state.bData;
    const rows = rowItems.map(this.createRow);
    return (
      <div>{rows}</div>
    );
  }
}
Box.propTypes = {'boxData': PropTypes.array.isRequired};
Box.defaultProps = {'boxData': []};
export default Box;
