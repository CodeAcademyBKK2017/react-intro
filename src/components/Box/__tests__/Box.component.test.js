import Box from '../Box.component';
import React from 'react';
import Row from '../../Row/Row.component';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

describe('Box group Test', () => {
  test('Box: snapshot test', () => {
    const snapshot = renderer.create(<Box />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  test('Box: getUpdatedCells test', () => {
    const oldState = [
      {'items': ['', '', ''], 'id': '111'},
      {'items': ['', '', ''], 'id': '222'},
      {'items': ['', '', ''], 'id': '333'}
    ];
    Object.freeze(oldState);
    const expected = [
      {'items': ['', '', ''], 'id': '111'},
      {'items': ['', '', 'X'], 'id': '222'},
      {'items': ['', '', ''], 'id': '333'}
    ];
    const box = shallow(<Box />).instance();
    const returnedData = box.getUpdatedCells(oldState, '222', 2);
    expect(returnedData).toEqual(expected);
    expect(oldState[1]).toEqual({'items': ['', '', ''], 'id': '222'});
  });

  test('Box: cellClickHandler test', () => {
    const box = shallow(<Box />).instance();
    const expected = [
      {
        'items': ['', '', ''],
        'id': '111'
      },
      {
        'items': ['', '', 'X'],
        'id': '222'
      },
      {
        'items': ['', '', ''],
        'id': '333'
      }
    ];
    box.cellclickHandler('222', 2)();
    expect(box.state.bData).not.toEqual(expected);
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
