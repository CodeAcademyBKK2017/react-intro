import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';

test('Box Snapshot Test',() => {
  const mock = [
    ['O','X','O'],
    ['X','O','O'],
    ['X','X','O']
  ];
  const tree = renderer.create(<Box Data={mock}/>);
  expect(tree).toMatchSnapshot();
});