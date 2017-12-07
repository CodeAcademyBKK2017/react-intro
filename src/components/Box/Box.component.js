import React, {Component} from 'react';
import Row from '../Row/Row.component';
import shortid from 'shortid';

class Box extends Component {
  state = {
    currentPlayer: 'o',
    data: [
      {id: shortid(), items: [
        {id: shortid(), title: ''},
        {id: shortid(), title: ''},
        {id: shortid(), title: ''},
      ]},
      {id: shortid(), items: [
        {id: shortid(), title: ''},
        {id: shortid(), title: ''},
        {id: shortid(), title: ''},
      ]},
      {id: shortid(), items: [
        {id: shortid(), title: ''},
        {id: shortid(), title: ''},
        {id: shortid(), title: ''},
      ]},
    ]
  }

  cellClickHandler = (cellClicked) => () => {
    if (cellClicked.title !== '') return;

    let {data,currentPlayer} = this.state;
    data.forEach((row) => {
      row.items.forEach((cell) => {
        if (cell.id === cellClicked.id) cell.title = currentPlayer;
      });
    });

    currentPlayer = currentPlayer === 'o' ? 'x' : 'o';


    this.setState({
      data: data,
      currentPlayer: currentPlayer
    });
  }

  getRow = (rowData) => <Row data={rowData.items} key={rowData.id} cellClickHandler={this.cellClickHandler} />

  render () {
    const rows = this.state.data.map(this.getRow);
    const resetButton = (this.isGameEnd()) ? <button style={{'fontSize': '15px', 'padding': '7px 15px'}} onClick={this.resetGame}>Reset</button> : null;
    
    return (
      <div>
        <div>
          <h2>Tie Tac Toe</h2>
          <p><b>Current Player:</b> {this.state.currentPlayer.toUpperCase()}</p>
        </div>
        <div>
          {rows}
        </div>
        {resetButton}
      </div>
    );
  }

  resetGame = () => {
    let {data} = this.state;
    data.forEach((row) => {
      row.items.forEach((cell) => {
        cell.title = '';
      });
    });

    this.setState({
      data: data,
      currentPlayer: 'o'
    });
  }

  

  isGameEnd = () => {
    let {data} = this.state;
    let gameEnd = true;

    data.forEach((row,ri) => {
      row.items.forEach((cell,ci) => {
        if (cell.title === '') {
          gameEnd = false;
        }
      });
    });

    return gameEnd;
  }
}

export default Box;