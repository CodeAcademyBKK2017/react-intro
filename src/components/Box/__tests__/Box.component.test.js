import Box from '../Box.component';
import React from 'react';
import Row from '../../Row/Row.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
const bData = [
  {'items': ['', '', ''], 'id': '111'},
  {'items': ['', '', ''], 'id': '222'},
  {'items': ['', '', ''], 'id': '333'}
];
describe('Box group Test Success', () => {
  test('Box: snapshot test', () => {
    const snapshot = renderer.create(<Box />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  test('Box: cellClickHandler test', () => {
    const box = shallow(<Box  />).instance();
    const initailState = [
      {'items': ['', '', ''], 'id': '111'},
      {'items': ['', '', ''], 'id': '222'},
      {'items': ['', '', ''], 'id': '333'}
    ];
    const expected = [
      {'items': ['', '', ''], 'id': '111'},
      {'items': ['', '', 'X'], 'id': '222'},
      {'items': ['', '', ''], 'id': '333'}
    ];
    box.setState({bData:initailState});
    box.cellclickHandler('222', 2)();
    expect(box.state.bData).toEqual(expected);
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
});
describe('Box test Case Fail', () => {
  
});

