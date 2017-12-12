import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Box from '../Box.component';
import Row from '../../Row/Row.component';

describe('Box Component', () => {
  // Snapshot and component testing
  it('Box: Box snapshot', () => {
    const snapshot = renderer.create(<Box />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  it('Box.getRow: Test row creating', () => {
    const box = shallow(<Box />).instance();
    const rowData = ['','',''];
    const expected = <Row data={rowData} rowIndex={0} key="r0" cellClickHandler={box.cellClickHandler} />;
    
    expect(box.getRow(rowData,0)).toEqual(expected);
  });

  it('Box.getRestartButton: Test restart button creating', () => {
    const box = shallow(<Box />).instance();
    const expected = <button onClick={box.resetGame}>Restart Game</button>;

    expect(box.getRestartButton()).toEqual(expected);
  });

  it('Box.getStatusPanel: Test status panel creating (1)', () => {
    const box = shallow(<Box />).instance();
    const expected = (
      <div>
        <p><b>O</b> WINNER !!!</p>
        <p>{box.getRestartButton()}</p>
      </div>
    );

    expect(box.getStatusPanel(false,'O','O')).toEqual(expected);
  });

  it('Box.getStatusPanel: Test status panel creating (2)', () => {
    const box = shallow(<Box />).instance();
    const expected = (
      <div>
        <p><b>O X</b> DRAW</p>
        <p>{box.getRestartButton()}</p>
      </div>
    );

    expect(box.getStatusPanel(true,null,'O')).toEqual(expected);
  });

  it('Box.getStatusPanel: Test status panel creating (3)', () => {
    const box = shallow(<Box />).instance();
    const expected = <p><b>O</b> Turn</p>;

    expect(box.getStatusPanel(false,null,'O')).toEqual(expected);
  });

  // Logic testing
  it('Box.getWinner: O should be winner (horizontal win)', () => {
    const gameData = [
      ['X','X',''],
      ['O','O','O'],
      ['','','']
    ];

    const pos = {row: 1, col: 2};
    const currentPlayer = 'O';

    const box = shallow(<Box />).instance();
    expect(box.getWinner(gameData, pos, currentPlayer)).toBe('O');
  });

  it('Box.getWinner: X should be winner (vertical win)', () => {
    const gameData = [
      ['','X','O'],
      ['O','X',''],
      ['O','X','O']
    ];

    const pos = {row: 2, col: 1};
    const currentPlayer = 'X';

    const box = shallow(<Box />).instance();
    expect(box.getWinner(gameData, pos, currentPlayer)).toBe('X');
  });

  it('Box.getWinner: O should be winner (diagonal win)', () => {
    const gameData = [
      ['O','X','X'],
      ['X','O',''],
      ['O','','O']
    ];

    const pos = {row: 1, col: 1};
    const currentPlayer = 'O';

    const box = shallow(<Box />).instance();
    expect(box.getWinner(gameData, pos, currentPlayer)).toBe('O');
  });

  it('Box.getWinner: O should be winner (ani-diagonal win)', () => {
    const gameData = [
      ['X','X','O'],
      ['X','O',''],
      ['O','','O']
    ];

    const pos = {row: 1, col: 1};
    const currentPlayer = 'O';

    const box = shallow(<Box />).instance();
    expect(box.getWinner(gameData, pos, currentPlayer)).toBe('O');
  });

  it('Box.getWinner: O shouldn\'t be winner', () => {
    const gameData = [
      ['X','X','O'],
      ['X','X',''],
      ['O','','O']
    ];

    const pos = {row: 1, col: 1};
    const currentPlayer = 'O';

    const box = shallow(<Box />).instance();
    expect(box.getWinner(gameData, pos, currentPlayer)).toBeFalsy();
  });

  it('Box.isGameOver: Game should be end if no empty place on the board', () => {
    const gameData = [
      ['O','X','O'],
      ['O','X','X'],
      ['X','O','O']
    ];

    const box = shallow(<Box />).instance();
    expect(box.isGameOver(gameData)).toBeTruthy();
  });

  it('Box.isGameOver: Game shouldn\'t be end if still have some empty place on the board', () => {
    const gameData = [
      ['O','X','O'],
      ['O','X','X'],
      ['X','','O']
    ];

    const box = shallow(<Box />).instance();
    expect(box.isGameOver(gameData)).toBeFalsy();
  });

  it('Box.resetGame: Game state should be reset', () => {
    const expectedState = {
      currentPlayer: 'o',
      gameData: [['','',''],['','',''],['','','']],
      winner: null,
      gameOver: false
    };

    const box = shallow(<Box />).instance();
    box.cellClickHandler({row: 0,col: 0})();
    box.resetGame();

    expect(box.state).toEqual(expectedState);
  });

  it('Box.cellClickHandler: Game state should be something like this', () => {
    const expectedState = {
      currentPlayer: 'o',
      gameData: [
        ['o','',''],
        ['','x',''],
        ['','','']
      ],
      winner: null,
      gameOver: false
    };

    const box = shallow(<Box />).instance();
    box.cellClickHandler({row: 0,col: 0})();
    box.cellClickHandler({row: 1,col: 1})();

    expect(box.state).toEqual(expectedState);
  });

  it('Box.cellClickHandler: Game state the O player should be the winner', () => {
    const expectedState = {
      currentPlayer: 'x',
      gameData: [
        ['o','',''],
        ['o','x',''],
        ['o','x','']
      ],
      winner: 'o',
      gameOver: false
    };
    
    const box = shallow(<Box />).instance();
    box.cellClickHandler({row: 0,col: 0})();
    box.cellClickHandler({row: 1,col: 1})();
    box.cellClickHandler({row: 1,col: 0})();
    box.cellClickHandler({row: 2,col: 1})();
    box.cellClickHandler({row: 2,col: 0})();

    expect(box.state).toEqual(expectedState);
  });

  it('Box.cellClickHandler: Game state shouldn\'t be change if cell is not empty', () => {
    const expectedState = {
      currentPlayer: 'x',
      gameData: [['o','',''],['','',''],['','','']],
      winner: null,
      gameOver: false
    };

    const box = shallow(<Box />).instance();
    box.cellClickHandler({row: 0,col: 0})();
    box.cellClickHandler({row: 0,col: 0})();

    expect(box.state).toEqual(expectedState);
  });
});