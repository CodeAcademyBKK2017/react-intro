import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box.component';
import {shallow} from 'enzyme';
import Row from '../../Row/Row.component';
import uuid from 'uuid';

const boxData = [
  {
    rowID: uuid(),
    rowData: [
      {
        cellID: uuid(),
        cellData: ''
      },
      {
        cellID: uuid(),
        cellData: ''
      },
      {
        cellID: uuid(),
        cellData: ''
      }
    ]
  },
  {
    rowID: uuid(),
    rowData: [
      {
        cellID: uuid(),
        cellData: ''
      },
      {
        cellID: uuid(),
        cellData: ''
      },
      {
        cellID: uuid(),
        cellData: ''
      }
    ]
  },
  {
    rowID: uuid(),
    rowData: [
      {
        cellID: uuid(),
        cellData: ''
      },
      {
        cellID: uuid(),
        cellData: ''
      },
      {
        cellID: uuid(),
        cellData: ''
      }
    ]
  }
];

test('Box: Snapshot test', () => { 
  const snapshot = renderer.create(<Box />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('Box.cellClickHandler', () => {
  const cellData = {rowID: '62f21e1c-9cd1-4e66-9c97-8436e3a4b2f4', cellID: '1095004b-81d6-467e-965b-e430020f5e8f', cellIndex: 1, cellData: ''};
  const boxInstance = shallow(<Box />).instance();
  expect(boxInstance.cellClickHandler(cellData)()).toBe('X');
});

test('Box.getRow: return row component for each array value', () => {
  const rowData = {
    rowID: 'rowID#1',
    rowData: [
      {
        cellID: 'cellID#1',
        cellData: ''
      },
      {
        cellID: 'cellID#2',
        cellData: ''
      },
      {
        cellID: 'cellID#3',
        cellData: ''
      }
    ]
  };
  const boxInstance = shallow(<Box />).instance();
  expect(boxInstance.getRow(rowData)).toEqual(
    <Row key={rowData.rowID} rowID={rowData.rowID} rowData={rowData.rowData} cellClickHandler={boxInstance.cellClickHandler} />
  );
});
