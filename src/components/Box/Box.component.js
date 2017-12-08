import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import cloneDeep from 'lodash/cloneDeep';
import uuid from 'uuid';


const replaceIndex = (array, index, replaceWith) => [...array.slice(0, index), replaceWith, ...array.slice(index + 1, array.length)];
 
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
    counter : 0
  }
  cellclickHandler = (rowID, cellIndex) => () => {
    const foundRow =  this.state.bData.find((rowData) => rowData.id === rowID);
    const selectedRowIndex = this.state.bData.indexOf(foundRow);
    let items = [];
    if (this.state.counter % 2 === 0) {
      items = replaceIndex(foundRow.items, cellIndex, 'X');
    } else {
      items = replaceIndex(foundRow.items, cellIndex, 'O');
    }
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
