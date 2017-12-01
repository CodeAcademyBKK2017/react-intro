import React from 'react';
import Cell from '../Cell.component';
import renderer from 'react-test-renderer';

test('Cell Snapshot Test',()=>{
    const tree = renderer.create(<Cell/>);
    expect(tree).toMatchSnapshot();
})