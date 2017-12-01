import renderer from 'react-test-renderer';
import React from 'react';
import Box from '../Box.components';

test('Box: snapshot test', () => {
    const titacto = 
    [
      ['O', 'X', 'O'],
      ['X', 'O', 'O'],
      ['X', 'X', 'O']
    ];
    const snapshot = renderer.create(<Box rowData={ titacto }/>);
    expect(snapshot).toMatchSnapshot();
});