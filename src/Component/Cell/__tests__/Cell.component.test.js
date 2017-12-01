import React from 'react';
import Cell from '../Cell.component';
import renderer from 'react-test-renderer';

test('Cell',()=>{
    const tree = renderer
    .create(<div style={{textAlign:'center'}}>
                <Cell />
                <Cell />
                <Cell />
            </div>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});