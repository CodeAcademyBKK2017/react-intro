import React from 'react';
import Cell from '../Cell.component';
import renderer from 'react-test-renderer';

test('Row:Snapshot', () => {
  const tree = renderer
    .create(<div>
                <Cell name="Hello"/>
            </div>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});