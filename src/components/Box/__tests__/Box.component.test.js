import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box.component';
import {shallow} from 'enzyme';
import Row from '../../Row/Row.component';
import uuid from 'uuid';

const boxData = [
  [uuid(), [[uuid(), 'o'], [uuid(), 'x'], [uuid(), 'o']]],
  [uuid(), [[uuid(), 'o'], [uuid(), 'x'], [uuid(), 'x']]],
  [uuid(), [[uuid(), 'x'], [uuid(), 'x'], [uuid(), 'o']]],
  [uuid(), [[uuid(), 'x'], [uuid(), 'x'], [uuid(), 'x']]],
  [uuid(), [[uuid(), 'x'], [uuid(), 'o'], [uuid(), 'x'], [uuid(), 'o'], [uuid(), 'o']]]
];

test('Box: Snapshot test', () => { 
  const snapshot = renderer.create(<Box boxData={boxData} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('Box.cellClickHandler', () => {
  const boxInstance = shallow(<Box boxData={boxData} />).instance();
  expect(boxInstance.cellClickHandler('x')()).toBe('x');
});

test('Box.getRow: return row component for each array value', () => {
  const rowData = ['someKey', ['someData']];
  const boxInstance = shallow(<Box boxData={boxData} />).instance();
  expect(boxInstance.getRow(rowData)).toEqual(
    <Row key={'someKey'} rowData={['someData']} cellClickHandler={boxInstance.cellClickHandler} />
  );
});
