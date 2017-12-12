import React, {Component} from 'react';
import Row from '../Row/Row.component';
import replaceArrayIndex from 'replace-array-index';
import swal from 'sweetalert';

class Box extends Component {
  initialState = {
    currentPlayer: 'o',
    gameData: [['','',''],['','',''],['','','']],
    winner: null,
    gameOver: false
  }

  state = this.initialState;

  cellClickHandler = (pos) => () => {
    const {gameData, currentPlayer, gameOver, winner} = this.state;
    if (gameData[pos.row][pos.col] !== '' || gameOver || winner) return;

    const newGameRowData = replaceArrayIndex(gameData[pos.row], pos.col, currentPlayer);
    const newGameData = replaceArrayIndex(gameData, pos.row, newGameRowData);
    newGameData[pos.row][pos.col] = currentPlayer;

    const theWinner = this.getWinner(newGameData, pos, currentPlayer);
    const isGameOver = this.isGameOver(newGameData);

    if (theWinner || isGameOver) {
      let message = '';
      if (theWinner) message = `${theWinner.toUpperCase()} WINNER !!!`;
      if (isGameOver) message = 'O X DRAW';

      swal(message);
      this.resetGame();
    } else {
      this.setState({
        gameData: newGameData, 
        currentPlayer: currentPlayer === 'o' ? 'x' : 'o',
        winner: theWinner,
        gameOver: isGameOver,
      });
    }
  }

  getWinner = (gameData, pos, currentPlayer) => {
    const winnerRules = [
      [{row: pos.row, col: 0},{row: pos.row, col: 1},{row: pos.row, col: 2}],   // horizontal
      [{row: 0, col: pos.col},{row: 1, col: pos.col},{row: 2, col: pos.col}],   // vertical
      [{row: 0,col: 0},{row: 1,col: 1},{row: 2,col: 2}],                        // diagonal
      [{row: 0,col: 2},{row: 1,col: 1},{row: 2,col: 0}]                         // anti-diagonal
    ];

    let theWinner = null;
    winnerRules.every((winnerRule) => {
      const [a,b,c] = winnerRule;
      const line = `${gameData[a.row][a.col]}${gameData[b.row][b.col]}${gameData[c.row][c.col]}`;

      if (line.match(new RegExp(`[${currentPlayer}]{3}`, 'i'))) {
        theWinner = currentPlayer;
        return false;
      }
      return true; 
    });

    return theWinner;
  }

  isGameOver = (gameData) => gameData.every((row) => row.every((cell) => cell !== ''))

  resetGame = () => this.setState(this.initialState);

  getRow = (rowData, i) => <Row data={rowData} rowIndex={i} key={`r${i}`} cellClickHandler={this.cellClickHandler} />

  getRestartButton = () => <button onClick={this.resetGame}>Restart Game</button>;

  render () {
    const {gameData} = this.state;
    const rows = gameData.map(this.getRow);

    return (
      <div>
        <h2>Tie Tac Toe</h2>
        {rows}
      </div>
    );
  }
}

export default Box;