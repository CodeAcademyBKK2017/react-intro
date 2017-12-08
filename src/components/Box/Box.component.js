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
    ]
  }

  getUpdatedCells = (oldState, rowID, cellIndex) => {
    const foundRow = oldState.find((rowData) => rowData.id === rowID);
    if (!foundRow) {
      return;
    }
    const selectedRowIndex = oldState.indexOf(foundRow);
    const items = replaceIndex(foundRow.items, cellIndex, 'X');
    const updatedRow = {id: rowID, items};
    const newBoxData = replaceIndex(oldState, selectedRowIndex, updatedRow);
    return newBoxData;
  }

  cellclickHandler = (rowID, cellIndex) => () => {
    const bData = this.getUpdatedCells(this.state.bData, rowID, cellIndex);
    if (bData) {
      this.setState({bData});
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
