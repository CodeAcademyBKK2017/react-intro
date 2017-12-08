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
  test('Box: createRow test', () => {
    const box = shallow(<Box  />).instance();
    const rowData = {
      'items': ['yo'],
      'id': 'yoyo'
    };
    const expected = <Row cellData={['yo']} key='yoyo' rowID={'yoyo'} cellclickHandler={box.cellclickHandler} />;
    expect(box.createRow(rowData)).toEqual(expected);
  });
  test('Box: cellclickHandler test (success)', () => {
    const initStateBData = [
      {
        'id': '111',
        'items': ['', '', '']
      },
      {
        'id': '222',
        'items': ['', '', '']
      },
      {
        'id': '333',
        'items': ['', '', '']
      }
    ];
    const expectedBData = [
      {
        'id': '111',
        'items': ['', '', '']
      },
      {
        'id': '222',
        'items': ['', '', 'X']
      },
      {
        'id': '333',
        'items': ['', '', '']
      }
    ];
    const box = shallow(<Box />).instance();
    box.setState({bData: initStateBData});
    box.cellclickHandler('222', 2)();
    expect(box.state.bData).toEqual(expectedBData);
  });
  test('Box: cellclickHandler test (fail)', () => {
    const expectedBData = [
      {
        'id': '111',
        'items': ['', '', '']
      },
      {
        'id': '222',
        'items': ['', '', 'X']
      },
      {
        'id': '333',
        'items': ['', '', '']
      }
    ];
    const box = shallow(<Box />).instance();
    box.cellclickHandler('222', 2)();
    expect(box.state.bData).not.toEqual(expectedBData);
  });
});

