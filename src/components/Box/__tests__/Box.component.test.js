import Box from '../Box.component';
import React from 'react';
import Row from '../../Row/Row.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
const bData = [
  {
    'items': ['O', 'X', 'O'],
    'id': '111'
  },
  {
    'items': ['X', 'O', 'O'],
    'id': '222'
  },
  {
    'items': ['X', 'X', 'O'],
    'id': '333'
  }
];
describe('Box group Test', () => {
  test('Box: snapshot test', () => {
    const snapshot = renderer.create(<Box />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  // test('Box: cellClickHandler test', () => {
  //   const box = shallow(<Box  />).instance();
  //   const cellHandler = box.cellclickHandler('111', 0);
  //   expect(cellHandler()).toEqual('x');
  // });
  test('Box: createRow test', () => {
    const box = shallow(<Box  />).instance();
    const rowData = {
      'items': ['yo'],
      'id': 'yoyo'
    };
    const expected = <Row cellData={['yo']} key='yoyo' rowID={'yoyo'} cellclickHandler={box.cellclickHandler} />;
    expect(box.createRow(rowData)).toEqual(expected);
  });
});

