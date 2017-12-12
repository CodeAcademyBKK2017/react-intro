import React, {Component} from 'react';
import Row from '../Row/Row.component';
import uuid from 'uuid';

class Box extends Component {
  state = {
    turn: true,
    cellClick: 0,
    haveAWinner: false,
    boxData: [
      {value: ['', '', ''], key: uuid()},
      {value: ['', '', ''], key: uuid()},
      {value: ['', '', ''], key: uuid()}
    ]
  };

  checkWinnerStyle = (cellPosition, getData) => {
    // แนวตั้ง 00 01 02 , 10 11 12 , 20 21 22
    if (getData[0].value.every((arg) => arg === cellPosition)) return true;
    else if (getData[1].value.every((arg) => arg === cellPosition)) return true;
    else if (getData[2].value.every((arg) => arg === cellPosition)) return true;

    // แนวนอน 00 10 20 , 01 11 21 , 02 12 22
    else if ([getData[0].value[0], getData[1].value[0], getData[2].value[0]].value.every((arg) => arg === cellPosition)) return true;
    else if ([getData[0].value[1], getData[1].value[1], getData[2].value[1]].value.every((arg) => arg === cellPosition)) return true;
    else if ([getData[0].value[2], getData[1].value[2], getData[2].value[2]].value.every((arg) => arg === cellPosition)) return true;
    
    // แนวเฉียง 00 11 22 , 02 11 20
    else if ([getData[0].value[0], getData[1].value[1], getData[2].value[2]].value.every((arg) => arg === cellPosition)) return true;
    else if ([getData[0].value[2], getData[1].value[1], getData[2].value[0]].value.every((arg) => arg === cellPosition)) return true;
    
    // Draw !!
    else if (this.state.cellClick === 9) return 'draw';
    
    // Not Match !!
    else return false;
  }

  checkWinner = (cellPosition) => {
    const getWinner =  this.checkWinnerStyle(cellPosition, this.state.boxData);
    if (getWinner) {
      this.setState({haveAWinner: true});
      setTimeout(() => {
        if (getWinner === 'draw') alert('!! Draw !!');
        else alert(`${cellPosition} is Winner !!!`);
      }, 0);
    }
  }

  cellOnClick = (row, cell) => () => {
    const getData = this.state;
    if (!getData.haveAWinner && getData.boxData[row].value[cell] === '') {
      const turn = (getData.turn) ? 'X' : 'O';
      getData.cellClick = getData.cellClick + 1;
      this.updateBoxdata(row, cell, turn, getData);
      this.checkWinner(turn);
    }
  }

  updateBoxdata = (row, cell, player, getData) => {
    const newBoxData = [...getData.boxData];
    newBoxData[row].value[cell] = player;
    this.setState({turn: (getData.turn) ? false : true});
    this.setState({boxData: newBoxData});
  }

  resetBoxData = () =>
    this.setState({
      turn: true,
      cellClick: 0,
      haveAWinner: false,
      boxData: [
        {value: ['', '', ''], key: uuid()},
        {value: ['', '', ''], key: uuid()},
        {value: ['', '', ''], key: uuid()}
      ]
    });

  getRow = (currentValue, index, array) => (
    <Row cellData = {currentValue.value} key = {index} row = {index} cellClickHandle = {this.cellOnClick}/>
  )

  render () {
    const rows = this.state.boxData.map(this.getRow);
    return (
      <div>
        {rows}
        <button onClick = {this.resetBoxData}><p>Restart</p></button>
      </div>
    );
  }
}

export default Box;