import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';

test('Row:Snapshot', () => {
    const data = ['o','x','o'];

  const tree = renderer
    .create(<Row willData="data" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});