import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box.component';

test('Box: Box snapshot', () => {
    const snapshot = renderer.create(<Box />).toJSON();
    expect(snapshot).toMatchSnapshot();
});