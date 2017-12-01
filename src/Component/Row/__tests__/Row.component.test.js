import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';

test('Row',()=>{
    const tree = renderer
    .create(<Row />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});