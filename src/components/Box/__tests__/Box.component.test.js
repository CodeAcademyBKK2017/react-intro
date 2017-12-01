import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box.component';

test('Box: Box snapshot', () => {
    const data = [
        ['x','o','x'],
        ['o','x','o'],
        ['x','o','x']
    ];

    const snapshot = renderer.create(<Box data={data}/>);
    expect(snapshot).toMatchSnapshot();
});