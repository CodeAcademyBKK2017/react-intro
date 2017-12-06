import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row.component';
import uuid from 'uuid';

test('Row: Snapshot test', () => {
  const rowData = [uuid().toString(), [[uuid().toString(), 'o'], [uuid().toString(), 'x'], [uuid().toString(), 'o']]];
  const snapshot = renderer.create(<Row key={rowData[0]} rowData={rowData[1]} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});