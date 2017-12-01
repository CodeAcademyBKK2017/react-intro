import React from 'react';
import renderer from 'react-test-renderer';
import Cell from '../Cell.component';

test('Cell: title o', () => {
    const snapshot = renderer.create(<Cell title='o'/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});

test('Cell: title x', () => {
    const snapshot = renderer.create(<Cell title='x'/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});