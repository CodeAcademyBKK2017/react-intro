import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';

test('Box:Snapshot', () => {
const  boxData = [
    ['o','x','o'],
    ['x','x','x'],
    ['o','x','o']
  ];

  const tree = renderer
    .create(<Box data={boxData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});