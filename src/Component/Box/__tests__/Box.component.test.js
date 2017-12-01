import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';

test('Box:snapshot',()=>{
    const tree = renderer
    .create(<Box name ='Nanny'/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});