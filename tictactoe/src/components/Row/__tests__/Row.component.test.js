import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row.component';

test('Row: Snapshot test', () => {
    const snapshot = renderer.create(<Row numberOfCell="5" />).toJSON();
    expect(snapshot).toMatchSnapshot();
});