import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Box from '../Box.component';
import Row from '../../Row/Row.component';
// import uuid from 'uuid';

const boxData = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

it('Box.cellClickHandler', () => {
  const expectedState = {
    boxData: [
      ['X', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    isXNext: false,
    scoreX: 1,
    scoreO: 0,
    message: 'Tic Tac Toe'
  };
  const boxInstance = shallow(<Box />).instance();
  boxInstance.cellClickHandler({rowIndex: 0, cellIndex: 0, cellData: 'X'})();
  expect(boxInstance.state).toMatchObject(expectedState);
});
