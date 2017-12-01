import React from 'react';
import Box from '../Box.component';
import renderer from 'react-test-renderer';

test('Box:Snapshot', () => {
  const tree = renderer
    .create(<Box style={{textAlign:'center'}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});