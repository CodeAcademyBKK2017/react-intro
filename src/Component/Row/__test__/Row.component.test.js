import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';

test('Row Snapshot Test',() => {
  let cellData = ['o','x','o'];
  const tree = renderer.create(<Row cellData={cellData}/>);
  expect(tree).toMatchSnapshot();
});
