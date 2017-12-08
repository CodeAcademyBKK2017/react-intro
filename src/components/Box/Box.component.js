import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/Row.component';
import uuid from 'uuid';
// import cloneDeep from 'lodash/cloneDeep';

const replaceArrayIndex = (array, index, replaceWith) => [...array.slice(0, index), replaceWith, ...array.slice(index + 1, array.length)];

class Box extends React.Component {
  state = {
    boxData: [
      {
        rowID: uuid(),
        rowData: [
          {
            cellID: uuid(),
            cellData: ''
          },
          {
            cellID: uuid(),
            cellData: ''
          },
          {
            cellID: uuid(),
            cellData: ''
          }
        ]
      },
      {
        rowID: uuid(),
        rowData: [
          {
            cellID: uuid(),
            cellData: ''
          },
          {
            cellID: uuid(),
            cellData: ''
          },
          {
            cellID: uuid(),
            cellData: ''
          }
        ]
      },
      {
        rowID: uuid(),
        rowData: [
          {
            cellID: uuid(),
            cellData: ''
          },
          {
            cellID: uuid(),
            cellData: ''
          },
          {
            cellID: uuid(),
            cellData: ''
          }
        ]
      }
    ]
  }

  cellClickHandler = (data) => () => {
    console.log(data);
    return this.changeCellData(data.rowID, data.cellIndex);
  };

  changeCellData = (rowID, cellIndex) => {
    // const newState = [...this.state.boxData];
    // const foundRow = this.state.boxData.find((row) => row.rowID === rowID);
    // const rowIndex = this.state.boxData.indexOf(foundRow);
    // newState[rowIndex].rowData[cellIndex].cellData = 'X';
    // this.setState({boxData: newState});
    // return 'X';

    const foundRow = this.state.boxData.find((row) => row.rowID === rowID);
    const rowIndex = this.state.boxData.indexOf(foundRow);
    foundRow.rowData[cellIndex].cellData = 'X';
    const updatedRowData = replaceArrayIndex(foundRow.rowData, cellIndex, 'X');
    const updatedRow = {rowID: rowID, rowDara: updatedRowData};
    const newStateBoxData = replaceArrayIndex(this.state.boxData, rowIndex, updatedRow);
    this.setState({boxData: newStateBoxData});
    return 'X';
  }

  getRow = (rowData) => <Row key={rowData.rowID} rowID={rowData.rowID} rowData={rowData.rowData} cellClickHandler={this.cellClickHandler} />

  componentWillMount () {
    console.log('componentWillMount');
  }

  componentDidMount () {
    console.log('componentDidMount');
  }

  render () {
    console.log('render');
    // const rowLists = boxData.map((rowData, index) => <Row key={rowData[0]} rowData={rowData[1]} cellClickHandler={this.cellClickHandler} />);
    const rowLists = this.state.boxData.map(this.getRow);
    return (
      <div>
        {rowLists}
      </div>
    );
  }
}

Box.propTypes = {
  boxData: PropTypes.array.isRequired
};

Box.defaultProps = {
  boxData: []
};

export default Box;
