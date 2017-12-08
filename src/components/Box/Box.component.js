import React, {Component} from 'react';
import Row from '../Row/Row.component';
import shortid from 'shortid';

class Box extends Component {
  state = {
    currentPlayer: 'o',
    currentId: '',
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

    // this.makeMatrix(cellClicked.id);

    this.setState({
      data: data,
      currentPlayer: currentPlayer,
      currentId: cellClicked.id
    });
  }

  getRow = (rowData) => <Row data={rowData.items} key={rowData.id} cellClickHandler={this.cellClickHandler} />

  render () {
    const rows = this.state.data.map(this.getRow);
    // const resetButton = (this.isGameEnd()) ? <button style={{'fontSize': '15px', 'padding': '7px 15px'}} onClick={this.resetGame}>Reset</button> : null;
    // this.isGameEnd();
    const resetButton = null;
    
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

  // isGameEnd = () => {
  //   let {data} = this.state;
  //   let matrix = [['','',''],['','',''],['','','']];
    
  //   let currentI = 0;
  //   let currentJ = 0;
  //   let currentTick = '';
    
  //   data.forEach((row,ri) => {
  //     row.items.forEach((cell,ci) => {
  //       matrix[ri][ci] = cell.title;
  //       if (this.state.currentId === cell.id) {
  //         currentI = ri;
  //         currentJ = ci;
  //         currentTick = cell.title;
  //       }
  //     });
  //   });
    
  //   // check horizontal
  //   const h = `${matrix[currentI][0]}${matrix[currentI][1]}${matrix[currentI][2]}`;
  //   const v = `${matrix[0][currentJ]}${matrix[1][currentJ]}${matrix[2][currentJ]}`;
  //   const cl = `${matrix[0][0]}${matrix[1][1]}${matrix[2][2]}`;
  //   const cr = `${matrix[0][2]}${matrix[1][1]}${matrix[2][0]}`;
    

  //   switch (`${currentTick}${currentTick}${currentTick}`) {
  //   case h:
        
  //     break;

  //   case v: 

  //     break;
    
  //   default:
  //     break;
  //   }

  //   if (h === `${currentTick}${currentTick}${currentTick}`) {
      
  //   } else if (v === `${currentTick}${currentTick}${currentTick}`) {
      
  //   } else if (cl === `${currentTick}${currentTick}${currentTick}`) {
      
  //   } else if (cr === `${currentTick}${currentTick}${currentTick}`) {
      
  //   } else {
  //     let gameEnd = true;
      
  //     data.forEach((row,ri) => {
  //       row.items.forEach((cell,ci) => {
  //         if (cell.title === '') {
  //           gameEnd = false;
  //         }
  //       });
  //     });
      
      
  //   }
  // }
}

export default Box;