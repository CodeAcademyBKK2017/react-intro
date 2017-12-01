import renderer from 'react-test-renderer';
import React from 'react';
import Box from '../Box.components';

test('Box: snapshot test', () => {
    const snapshot = renderer.create(<Box />);
    expect(snapshot).toMatchSnapshot();
});