import React, {Component} from 'react';
import Row from '../Row/Row.component';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';
import replaceIndex from 'replace-array-index';
import uuid from 'uuid';

class Box extends Component {
  
  initialstate = {
    player: true,
    TwoD: [
      {
        items: ['','',''],
        rowkeys: uuid()
      },
      {
        items: ['','',''],
        rowkeys: uuid()
      },
      {
        items: ['','',''],
        rowkeys: uuid()
      }
    ],
    countClick: 1
  }

  state = this.initialstate;
  getUpdatedCells = (oldState, rowID, cellIndex, isXNext) => {
    const foundRow = oldState.find((rowData) => rowData.rowkeys === rowID);
    if (!foundRow) {
      return;
    }
    const selectedRowIndex = oldState.indexOf(foundRow);
    const newCellValue = isXNext ? 'X' : 'O';
    const items = replaceIndex(foundRow.items, cellIndex, newCellValue);
    const updatedRow = {rowkeys: rowID, items};
    const newBoxData = replaceIndex(oldState, selectedRowIndex, updatedRow);
    return newBoxData;
  }

  clearGame = () => this.setState(this.initialstate); 
  
  getWinner = (newbData) => {
    const joinArrayData = newbData[0].items.concat(newbData[1].items,newbData[2].items);
    const winCodition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winCodition.length; i++) {
      const [a, b, c] = winCodition[i];
      if (joinArrayData[a] && joinArrayData[a] === joinArrayData[b] && joinArrayData[a] === joinArrayData[c]) {
        return joinArrayData[a];
      }
    }
    return null;
  } // Write logic here

  cellClickHandleCallBack = (arg,rowID,cellID) => () => {
    const {TwoD, player,countClick} = this.state;
    const newbData = this.getUpdatedCells(TwoD, rowID, cellID, player);
    if (TwoD) {
      let numCount = this.state.countClick;
      this.setState({TwoD: newbData, player: !player,countClick: numCount + 1});
      const winner = this.getWinner(newbData);
      if (winner) {
        alert('Winner is: ' +  winner);
        this.clearGame();
      } else if (countClick === (TwoD.length * TwoD.length)) {
        alert('Draw');
        this.clearGame();
      }
    }
  }

  mapFunction = (rawData) => <Row cellData={rawData.items} key={rawData.rowkeys} rowID={rawData.rowkeys} clickHandle={this.cellClickHandleCallBack}/>;
  
  render () {
    const TwoD = this.state.TwoD; 
    const row = TwoD.map(this.mapFunction);
    return (<div>
      {row}
    </div>);
  }
}

Box.propTypes = {
  Data: ProptTypes.array.isRequired,
  callHandle: ProptTypes.func.isRequired
};

Box.defaultProps = {
  Data: [],
  callHandle: noop
};

export default Box;
