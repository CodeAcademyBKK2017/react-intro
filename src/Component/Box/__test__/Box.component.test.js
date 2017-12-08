import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';
import uuid from 'uuid';

const valueData = [
  {value: ['x','o','o'],key: uuid()},
  {value: ['x','x','o'],key: uuid()},
  {value: ['o','x','o'],key: uuid()}
];

test('Box Snapshot Test',() => {
  const tree = renderer.create(<Box valueData = {valueData} cellOnClick = {jest.fn()}/>);
  expect(tree).toMatchSnapshot();
});

