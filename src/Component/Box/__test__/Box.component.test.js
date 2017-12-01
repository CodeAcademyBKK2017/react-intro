import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';

test('Box Snapshot Test',()=>{
  let valueData = [
    ['o','x','o'],
    ['x','o','o'],
    ['x','x','o']
  ];
  const tree = renderer.create(<Box data = {valueData} clickHandler = {jest.fn()}/>);
  expect(tree).toMatchSnapshot();
})
