import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';

test('Box Snapshot Test',()=>{
  const tree = renderer.create(<Row/>);
  expect(tree).toMatchSnapshot();
})
