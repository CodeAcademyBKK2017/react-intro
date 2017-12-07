import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import cloneDeep from 'lodash/cloneDeep';
import uuid from 'uuid';

class Box extends Component {
  state = {
    bData: [
      {
        'items': ['1', '2', '3'],
        'id': uuid()
      },
      {
        'items':  ['4', '5', '6'],
        'id': uuid()
      },
      {
        'items':  ['7', '8', '9'],
        'id': uuid()
      }
    ]
  }
  cellclickHandler = (rowID, cellID) => () => {
    const newBoxData = cloneDeep(this.state.bData);
    const foundRow = newBoxData.find((rowData) => rowData.id === rowID);
    console.log(foundRow, newBoxData.indexOf(foundRow));
    foundRow.items[cellID] = 'X';
    console.log('Change', foundRow);
    console.log('Original', this.state.bData);
    this.setState({'bData' :newBoxData});
  } 

  createRow = (rowData) => <Row cellData={rowData.items}
    key={rowData.id} rowID={rowData.id} cellclickHandler={this.cellclickHandler} />

  componentWillMount () {
    console.log('This is component will mount that call before render');
  }
  componentDidMount  () {
    console.log('This is component Did mount that call after render');
  }
  render () {
    console.log('This is a render');
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
