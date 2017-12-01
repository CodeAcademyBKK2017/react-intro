import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box.component';

test('Box: Snapshot test', () => {
    const boxData = [
        ['o', 'x', 'o'],
        ['o', 'x', 'x'],
        ['x', 'x', 'o']
    ];
    const snapshot = renderer.create(<Box boxData={boxData} />).toJSON();
    expect(snapshot).toMatchSnapshot();
});
