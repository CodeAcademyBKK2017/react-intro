import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import cloneDeep from 'lodash/cloneDeep';
import replaceIndex from 'replace-array-index';
import swal from 'sweetalert';
import uuid from 'uuid';
import './Box.style.css';
// const replaceIndex = (array, index, replaceWith) => [...array.slice(0, index), replaceWith, ...array.slice(index + 1, array.length)];
class Box extends Component {
  initialstate = {
    bData: [
      {'items': ['', '', ''], 'id': uuid()},
      {'items':  ['', '', ''], 'id': uuid()},
      {'items':  ['', '', ''], 'id': uuid()}
    ],
    isXNext : true,
    count : 0,
  }
  state = this.initialstate;
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
    // Write logic here
    const winPatternIndex = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const SingleArrData = boxState.reduce((acc, curr) => [...acc, ...curr.items], []);
    // console.log(SingleArrData) ['','','','','','','','','']
    for (let i = 0; i < winPatternIndex.length; i++) {
      const [a, b, c] = winPatternIndex[i];
      if (SingleArrData[a] &&
        (SingleArrData[a] === SingleArrData[b]) &&
        (SingleArrData[a] === SingleArrData[c])
      ) {
        // console.log(SingleArrData[a], SingleArrData[b], SingleArrData[c]);
        return SingleArrData[a];
      }
    } 
    return null;
  }
reset=() => { 
  this.setState(this.initialstate); 
}
  cellclickHandler = (rowID, cellIndex) => () => {
    const {bData, isXNext, count} = this.state;
    const newbData = this.getUpdatedCells(bData, rowID, cellIndex, isXNext);
    if (bData) {
      this.setState({bData: newbData, count : count + 1});
      const winner = this.getWinner(newbData, isXNext);

      if (winner) {
        swal('Congratulation!', 'The winner is ' + winner, 'success').then(this.reset);
      } else if (count === 8) {
        swal('Draw!', 'The the game is end', 'success').then(this.reset);
      } else {
        this.setState({isXNext : !isXNext});
      }
    }
  }

  createRow = (rowData) => <Row cellData={rowData.items}
    key={rowData.id} rowID={rowData.id} cellclickHandler={this.cellclickHandler} />

  render () {
    const rowItems = this.state.bData;
    const rows = rowItems.map(this.createRow);
    return (
      <div className={'box'}>{rows}</div>
    );
  }
}
Box.propTypes = {'boxData': PropTypes.array.isRequired};
Box.defaultProps = {'boxData': []};
export default Box;
