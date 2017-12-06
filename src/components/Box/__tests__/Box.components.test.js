import renderer from 'react-test-renderer';
import React from 'react';
import Box from '../Box.components';
import uuid from 'uuid';

test('Box: snapshot test', () => {
  const titacto = 
  [
    {
      arr: ['O', 'X', 'O'],
      key: uuid()
    },
    {
      arr: ['X', 'O', 'O'],
      key: uuid()
    },
    {
      arr: ['X', 'X', 'O'],
      key: uuid()
    }
  ];
  const snapshot = renderer.create(<Box rowData={ titacto } cellClickHandler={() => {}}/>);
  expect(snapshot).toMatchSnapshot();
});