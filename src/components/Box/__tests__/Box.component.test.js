import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box.component';

test('Box: Box snapshot', () => {
    const data = [
        ['o', 'x', 'o'],
        ['x', 'o', 'x'],
        ['o', 'x', 'o']
    ];

    const snapshot = renderer.create(<Box data={data} />).toJSON();
    expect(snapshot).toMatchSnapshot();
});