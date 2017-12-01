import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';

test('Box:snapshot',()=>{
  const boxData = [
    ['o','x','o'],
    ['x','x','o'],
    ['o','x','x'],
  ]
    const tree = renderer
    .create(<Box data = {boxData}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});