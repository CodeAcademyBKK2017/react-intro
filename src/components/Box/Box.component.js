import React, {Component} from 'react';
import Row from '../Row/Row.component';
import replaceArrayIndex from 'replace-array-index';

class Box extends Component {
  state = {
    currentPlayer: 'o',
    gameData: [['','',''],['','',''],['','','']],
    winner: null,
    gameOver: false
  }

  cellClickHandler = (pos) => () => {
    const {gameData, currentPlayer, gameOver, winner} = this.state;
    if (gameData[pos.row][pos.col] !== '' || gameOver || winner) return;

    const newGameRowData = replaceArrayIndex(gameData[pos.row], pos.col, currentPlayer);
    const newGameData = replaceArrayIndex(gameData, pos.row, newGameRowData);
    newGameData[pos.row][pos.col] = currentPlayer;

    this.setState({
      gameData: newGameData, 
      currentPlayer: currentPlayer === 'o' ? 'x' : 'o',
      winner: this.getWinner(newGameData, pos, currentPlayer),
      gameOver: this.isGameOver(newGameData),
    });
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

  resetGame = () => {
    this.setState({
      currentPlayer: 'o',
      gameData: [['','',''],['','',''],['','','']],
      winner: null,
      gameOver: false
    });
  }

  getRow = (rowData, i) => <Row data={rowData} rowIndex={i} key={`r${i}`} cellClickHandler={this.cellClickHandler} />

  getRestartButton = () => <button onClick={this.resetGame}>Restart Game</button>;

  getStatusPanel = (gameOver, winner, currentPlayer) => {
    let statusPanel = null;

    if (winner) {
      statusPanel = (
        <div>
          <p><b>{winner.toUpperCase()}</b> WINNER !!!</p>
          <p>{this.getRestartButton()}</p>
        </div>
      );
    } else if (gameOver) {
      statusPanel = (
        <div>
          <p><b>O X</b> DRAW</p>
          <p>{this.getRestartButton()}</p>
        </div>
      );
    } else {
      statusPanel = (<p><b>{currentPlayer.toUpperCase()}</b> Turn</p>);
    }

    return statusPanel;
  }

  render () {
    const {gameData, winner, gameOver, currentPlayer} = this.state;
    const rows = gameData.map(this.getRow);
    const statusPanel = this.getStatusPanel(gameOver, winner, currentPlayer);
    
    return (
      <div>
        <h2>Tie Tac Toe</h2>
        {statusPanel}
        <div>
          {rows}
        </div>
      </div>
    );
  }
}

export default Box;