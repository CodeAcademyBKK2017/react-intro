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
  cellclickHandler = (rowID, cellIndex) => () => {
    const foundRow =  this.state.bData.find((rowData) => rowData.id === rowID);
    const selectedRowIndex = this.state.bData.indexOf(foundRow);
    const items = replaceIndex(foundRow.items, cellIndex, 'X');
    const updatedRow = {id: rowID, items};
    const newBoxData = replaceIndex(this.state.bData, selectedRowIndex, updatedRow);
    this.setState({'bData' :newBoxData});
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
