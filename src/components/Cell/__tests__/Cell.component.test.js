import React from 'react';
import Cell from '../Cell.component';
import renderer from 'react-test-renderer';

test('Row:Snapshot', () => {


  const tree = renderer
    .create(<Cell willData="x" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});