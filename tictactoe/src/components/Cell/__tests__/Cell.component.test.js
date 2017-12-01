import React from 'react';
import renderer from 'react-test-renderer';
import Cell from '../Cell.component';

test('Cell: Snapshot test', () => {
    const snapshot = renderer.create(<Cell text="O" color="blue" />).toJSON();
    expect(snapshot).toMatchSnapshot();
});