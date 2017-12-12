import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row.component';
import uuid from 'uuid';

test('Row: row snapshot', () => {
  const data =  ['','',''];

  const cellClickHandler = (pos) => () => {};
  const snapshot = renderer.create(<Row data={data} cellClickHandler={cellClickHandler({row: 0,col: 0})} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});