import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import cloneDeep from 'lodash/cloneDeep';
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
    counter : 0
  }
  cellclickHandler = (rowID, cellID) => () => {
    const newBoxData = cloneDeep(this.state.bData);
    const foundRow = newBoxData.find((rowData) => rowData.id === rowID);
    if (this.state.counter % 2 === 0) {
      foundRow.items[cellID] = 'X';
    } else {
      foundRow.items[cellID] = 'O';
    }
    this.setState({
      'bData' :newBoxData,
      'counter' :  this.state.counter + 1
    });
  } 

  createRow = (rowData, index, array) => <Row cellData={rowData.items}
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
