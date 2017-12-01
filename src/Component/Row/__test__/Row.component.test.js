import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';

test('Box Snapshot Test',()=>{
  let valueData = ['o','x','o'];
  const tree = renderer.create(<Row cellData={valueData}/>);
  expect(tree).toMatchSnapshot();
})
