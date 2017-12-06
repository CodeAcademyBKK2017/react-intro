import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row.component';

test('Row: Snapshot test', () => {
  const rowData = ['o', 'x', 'o'];
  const snapshot = renderer.create(<Row rowData={rowData} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});