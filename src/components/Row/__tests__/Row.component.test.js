import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row.component';

test('Row: row snapshot', () => {
    const data = ['o','x','o'];
    const snapshot = renderer.create(<Row data={data} cellClickHandler={jest.fn}/>).toJSON();
    expect(snapshot).toMatchSnapshot();
});
