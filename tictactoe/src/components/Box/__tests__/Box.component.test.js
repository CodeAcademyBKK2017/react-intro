import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box.component';

test('Box: Snapshot test', () => {
    const snapshot = renderer.create(<Box numberOfRow="3" numberOfCell="3" />);
    expect(snapshot).toMatchSnapshot();
});
