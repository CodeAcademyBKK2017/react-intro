import React from 'react';
import Cell from '../Cell.component';
import renderer from 'react-test-renderer';

test('Cell Snapshot Test',()=>{
    const mock = 'X'
    const tree = renderer.create(<Cell  value={mock} color="red"/>);
    expect(tree).toMatchSnapshot();
})