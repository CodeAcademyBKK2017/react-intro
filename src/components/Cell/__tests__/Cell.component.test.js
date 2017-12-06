import React from 'react';
import renderer from 'react-test-renderer';
import Cell from '../Cell.component';

test('Cell: Snapshot test', () => {
  const cellData = 'o';
  const snapshot = renderer.create(<Cell cellData={cellData} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});