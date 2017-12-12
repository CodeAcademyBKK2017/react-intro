import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/Row.component';
import './Box.style.css';
// import uuid from 'uuid';
// import cloneDeep from 'lodash/cloneDeep';

const replaceArrayIndex = (array, index, replaceWith) => [...array.slice(0, index), replaceWith, ...array.slice(index + 1, array.length)];

class Box extends React.Component {
  initialState = {
    boxData: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    isXNext: true,
    scoreX: 0,
    scoreO: 0,
    message: ''
  }
  indicator = [
    [1, 2, 4],
    [8, 16, 32],
    [64, 128, 256]
  ];
  winScore = [7, 56, 448, 73, 146, 292, 273, 84];
  // 1   = 000000001
  // 2   = 000000010
  // 4   = 000000100
  // 8   = 000001000
  // 16  = 000010000
  // 32  = 000100000
  // 64  = 001000000
  // 128 = 010000000
  // 256 = 100000000

  state = this.initialState;
  reset = () => {
    this.setState(this.initialState);
  }

  cellClickHandler = (data) => () => this.updateBoard(data.rowIndex, data.cellIndex, data.cellData)

  updateBoard = (rowIndex, cellIndex, cellData) => {
    const player = this.state.isXNext ? 'X' : 'O';
    const updatedRow = replaceArrayIndex(this.state.boxData[rowIndex], cellIndex, player);
    const newStateBoxData = replaceArrayIndex(this.state.boxData, rowIndex, updatedRow);
    const score = {};
    if (player === 'X') {
      score.scoreX = this.state.scoreX + this.indicator[rowIndex][cellIndex];
    } else {
      score.scoreO = this.state.scoreO + this.indicator[rowIndex][cellIndex];
    }
    this.setState({boxData: newStateBoxData, isXNext: !this.state.isXNext, ...score}, () => {
      const theWinner = this.getTheWinner();
      this.setState({message: theWinner});
    });
  }

  getTheWinner = () => {
    if (this.state.isXNext) {
      return this.winnerLogic(this.state.scoreO) ? 'O - The winner' : 'playing...';
    } else {
      return this.winnerLogic(this.state.scoreX) ? 'X - The winner' : 'playing...';
    }
  }

  winnerLogic = (score) => {
    for (let i = 0; i < this.winScore.length; i += 1) {
      if ((this.winScore[i] & score) === this.winScore[i]) {
        return true;
      }
    }
    return false;
  }

  getRow = (rowData, rowIndex) => <Row key={rowIndex} rowIndex={rowIndex} rowData={rowData} cellClickHandler={this.cellClickHandler} />

  // componentWillMount () {
  //   console.log('componentWillMount');
  // }

  // componentDidMount () {
  //   console.log('componentDidMount');
  // }

  // componentDidUpdate () {
  //   console.log('componentDidUpdate');
  // }

  render () {
    console.log('render');
    const rowLists = this.state.boxData.map(this.getRow);
    return (
      <div className='box-container'>
        <h1 className='title'>Tic Tac Toe</h1>
        <h3 className='info'>I want to play a game.</h3>
        <div className='row-container'>{rowLists}</div>
        <h2 className='message'>{this.state.message}</h2>
        <button className='btn btn-reset' onClick={this.reset}>Reset</button>
        <p className='credit'>Made by Teeraphong Chaichalermpreecha</p>
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
