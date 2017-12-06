import renderer from 'react-test-renderer';
import React from 'react';
import Cell from '../Cell.components';

test('Cell: snapshot test', () => {
  const snapshot = renderer.create(<Cell name='Bank' cellClickHandler={() => {}}/>);
  expect(snapshot).toMatchSnapshot();
});