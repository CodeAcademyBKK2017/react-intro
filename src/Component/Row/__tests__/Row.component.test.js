import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';

test('Row',()=>{
  const  data = ['o','x','o'];

    const tree = renderer
    .create(<Row data = "data"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});