import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';

test('Box Snapshot Test',()=>{
  const tree = renderer.create(<Box/>);
  expect(tree).toMatchSnapshot();
})
