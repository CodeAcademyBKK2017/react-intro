import Box from '../Box.component';
import React from 'react';
import Row from '../../Row/Row.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
const bData = [
  {
    'items': [
      'O',
      'X',
      'O'
    ],
    'id': '111'
  },
  {
    'items': [
      'X',
      'O',
      'O'
    ],
    'id': '222'
  },
  {
    'items': [
      'X',
      'X',
      'O'
    ],
    'id': '333'
  }
];
test('Box: snapshot test', () => {

  const snapshot = renderer.create(<Box boxData={bData}/>).toJSON();
  expect(snapshot).toMatchSnapshot();

});
test('Box: createRow test', () => {

  const box = shallow(<Box boxData={bData} />).instance();
  const rowData = {
    'items': ['yo'],
    'id': 'yoyo'
  };
  const expected = <Row cellData={['yo']} key='yoyo' cellclickHandler={box.cellclickHandler} />;
  expect(box.createRow(rowData)).toEqual(expected);

});

