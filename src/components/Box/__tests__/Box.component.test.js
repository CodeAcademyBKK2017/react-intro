import React from 'react';
import Box from '../Box.component';
import Row from '../../Row/Row.component';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import uuid from 'uuid';

describe('Box group Test', () => {
  it('Box: snapshot test', () => {
    const snapshot = renderer.create(<Box />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
  it('Box.getWinner: should return winner', () => {
    const boxState = [
      {
        items: ['X','X','X']
      },
      {
        items: ['','','']
      },
      {
        items: ['','','']
      }
    ];
    const box = shallow(<Box />).instance();
    expect(box.getWinner(boxState)).toEqual('X');
  });
  it('Box.getWinner: should return winner', () => {
    const boxState = [
      {
        items: ['X','','']
      },
      {
        items: ['X','','']
      },
      {
        items: ['X','','']
      }
    ];
    const box = shallow(<Box />).instance();
    expect(box.getWinner(boxState)).toEqual('X');
  });
  it('Box.getWinner: should return winner', () => {
    const boxState = [
      {
        items: ['X','','']
      },
      {
        items: ['','X','']
      },
      {
        items: ['','','X']
      }
    ];
    const box = shallow(<Box />).instance();
    expect(box.getWinner(boxState)).toEqual('X');
  });
  it('Box.getWinner: should return winner', () => {
    const boxState = [
      {
        items: ['X','X','O']
      },
      {
        items: ['X','O','X']
      },
      {
        items: ['O','','X']
      }
    ];
    const box = shallow(<Box />).instance();
    expect(box.getWinner(boxState)).toEqual('O');
  });
  it('Box.getWinner: should return draw', () => {
    const boxState = [
      {
        items: ['X','X','O']
      },
      {
        items: ['O','X','X']
      },
      {
        items: ['X','O','O']
      }
    ];
    const box = shallow(<Box />).instance();
    expect(box.getWinner(boxState)).toEqual(null);
  });
  it('Box: getUpdatedCells test', () => {
    const oldState = [
      {'items': ['', '', ''], 'rowkeys': '111'},
      {'items': ['', '', ''], 'rowkeys': '222'},
      {'items': ['', '', ''], 'rowkeys': '333'}
    ];
    // Object.freeze(oldState);
    const expected = [
      {'items': ['', '', ''], 'rowkeys': '111'},
      {'items': ['', '', 'X'], 'rowkeys': '222'},
      {'items': ['', '', ''], 'rowkeys': '333'}
    ];

    const expectedO = [
      {'items': ['', '', ''], 'rowkeys': '111'},
      {'items': ['', '', 'O'], 'rowkeys': '222'},
      {'items': ['', '', ''], 'rowkeys': '333'}
    ];
    const box = shallow(<Box />).instance();
    const returnedData = box.getUpdatedCells(oldState, '222', 2, true);
    const returnedDataNull = box.getUpdatedCells(oldState, '000', 12, true);
    const returnedDataO = box.getUpdatedCells(oldState, '222', 2, false);
    expect(returnedData).toEqual(expected);
    expect(returnedDataNull).toEqual(undefined);
    expect(returnedDataO).toEqual(expectedO);
    expect(oldState[1]).toEqual({'items': ['', '', ''], 'rowkeys': '222'});
  });

  it('cellClickHandle Function Test',() => {
    jest.mock('uuid', () => 'abc');
    console.log(jest.mock);
    const TwoD = [
      {
        items: ['','',''],
        rowkeys: uuid()
      },
      {
        items: ['','',''],
        rowkeys: uuid()
      },
      {
        items: ['','',''],
        rowkeys: uuid()
      }
    ];
    const box = shallow(<Box />).instance();
    box.cellClickHandleCallBack(null,TwoD[0].rowkeys,0);
    console.log(box.state);
    expect(box.state).toBe(TwoD);
  });

  it('Box: clearGame test function', () => {
    const box = shallow(<Box  />).instance();
    const oldstate = box.initialstate;
    box.clearGame();
    expect(box.state).toEqual(oldstate);
  });

  it('Box: createRow test', () => {
    const box = shallow(<Box  />).instance();
    const rowData = {
      'items': ['yo'],
      'rowkeys': 'yoyo'
    };
    const expected = <Row cellData={['yo']} key='yoyo' rowID={'yoyo'}  clickHandle={box.cellClickHandleCallBack} />;
    expect(box.mapFunction(rowData)).toEqual(expected);
  });
});