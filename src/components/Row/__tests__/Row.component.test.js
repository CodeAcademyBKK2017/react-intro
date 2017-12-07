import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row.component';
import uuid from 'uuid';

test('Row: row snapshot', () => {
  const data =  [
    {id: uuid(), title: 'o'},
    {id: uuid(), title: 'x'},
    {id: uuid(), title: 'o'},
  ];

  const cellClickHandler = () => {};
  const snapshot = renderer.create(<Row data={data} cellClickHandler={cellClickHandler} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});