import PropType from 'prop-types';
import React from 'react';
import uuid from 'uuid';
import Row from '../Row/Row.component';
class Box extends React.Component {
  state = {
    counter: 0,
    data: [
      {
        'value': [
          '',
          '',
          ''
        ],
        'key': uuid()
      },
      {
        'value': [
          '',
          '',
          ''
        ],
        'key': uuid()
      },
      {
        'value': [
          '',
          '',
          ''
        ],
        'key': uuid()
      }
    ]
  }
  clickHandler = (keyRow, cellIndex) => () => { // keep data in state and data and logic in one file
    const foundRow = this.state.data.find((rowData) => rowData.key === keyRow);
    const rowIndex = this.state.data.indexOf(foundRow);
    if (foundRow.value[cellIndex] !== '') return;
    if (this.state.counter % 2 === 0) {
      foundRow.value[cellIndex] = 'X';
    } else {
      foundRow.value[cellIndex] = 'O';
    }
    const newData = [...this.state.data];
    newData[rowIndex] = foundRow;
    this.setState({
      data: newData,
      counter: this.state.counter + 1
    });
  }
  render () {
    const data = this.state.data;
    const rows = data.map((rowsData) => <Row willData={rowsData.value} keyRow={rowsData.key} key={rowsData.key} clickHandler={this.clickHandler}/>);
    return (<div style={{'textAlign': 'center'}}>{rows}</div>
  	);
  }

}
Box.PropType = {data: PropType.array.isRequired};
export default Box;
