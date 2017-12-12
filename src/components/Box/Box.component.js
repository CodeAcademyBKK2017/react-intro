import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import replaceIndex from 'replace-array-index';
import uuid from 'uuid';
import './Box.style.css';

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

  initialstate = this.state;

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

  getWinner = (boxState) => {
    let isXNext = this.state.isXNext;
    const checkIsWin = isXNext ? 'X' : 'O';
    
    let check = false;
    for (let i = 0; i < boxState.length; i++) {
      for (let j = 0; j < boxState[i].items.length; j++) {
        if (boxState[i].items[j] !== checkIsWin) {
          break;
        } else if (j === (boxState[i].items.length - 1)) {
          check = checkIsWin;
        }
      }
    }
    if (check !== false) {
      return check;
    }
    
    for (let i = 0; i < boxState.length; i++) {
      for (let j = 0; j < boxState[i].items.length; j++) {
        if (boxState[j].items[i] !== checkIsWin) {
          break;
        } else if (j === (boxState[i].items.length - 1)) {
          check = checkIsWin;
        }
      }
    }
    if (check !== false) {
      return check;
    }

    for (let i = 0; i < boxState.length; i++) {
      let point = i;
      if (i === 0) {
        for (let j = 0; j < boxState[i].items.length; j++) {
          if (boxState[j].items[point++] !== checkIsWin) {
            break;
          } else if (j === (boxState[i].items.length - 1)) {
            check = checkIsWin;
          }
        }
      } else if (i === (boxState.length - 1)) {
        for (let j = 0; j < boxState[i].items.length; j++) {
          if (boxState[j].items[point--] !== checkIsWin) {
            break;
          } else if (j === (boxState[i].items.length - 1)) {
            check = checkIsWin;
          }
        }
      }
    }
    return check;
    // console.log(boxState);
    // alert(checkIsWin);
  } // Write logic here

  cellclickHandler = (rowID, cellIndex) => () => {
    const {bData, isXNext} = this.state;
    const newbData = this.getUpdatedCells(bData, rowID, cellIndex, isXNext);
    if (bData) {
      this.setState({bData: newbData, isXNext: !isXNext});
      const winner = this.getWinner(newbData);
      if (winner) {
        alert('Winner is: ' +  winner);
        this.reset();
      }
    }
  }

  reset=() => {
    this.setState(this.initialstate); 
  }

  createRow = (rowData) => <Row cellData={rowData.items}
    key={rowData.id} rowID={rowData.id} cellclickHandler={this.cellclickHandler} />

  render () {
    const rowItems = this.state.bData;
    const rows = rowItems.map(this.createRow);
    return (
      <div className="app">
          <div className="title">Welcome to tic-tac-toa</div>
          <div className="text">Please start playing</div>
      {rows}
      <p className="windows-style" >Power By Chaowalit</p>
      </div>
      
    );
  }
}
Box.propTypes = {'boxData': PropTypes.array.isRequired};
Box.defaultProps = {'boxData': []};
export default Box;