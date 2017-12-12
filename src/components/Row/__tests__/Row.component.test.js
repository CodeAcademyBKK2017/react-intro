import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row.component';

it('Row: Snapshot test', () => {
  const rowData = ['X', 'O', 'X'];
  const snapshot = renderer.create(<Row key={0} rowIndex={0} rowData={rowData} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
