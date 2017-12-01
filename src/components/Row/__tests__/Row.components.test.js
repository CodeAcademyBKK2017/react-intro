import renderer from 'react-test-renderer';
import React from 'react';
import Row from '../Row.components';

test('Box: snapshot test', () => {
    const snapshot = renderer.create(<Row />);
    expect(snapshot).toMatchSnapshot();
});