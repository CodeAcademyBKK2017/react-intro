import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Box from '../Box.component';
import uuid from 'uuid';

test('Box: Box snapshot', () => {
  const data = [
    {id: uuid(), items: [
      {id: uuid(), title: 'o'},
      {id: uuid(), title: 'x'},
      {id: uuid(), title: 'o'},
    ]},
    {id: uuid(), items: [
      {id: uuid(), title: 'x'},
      {id: uuid(), title: 'o'},
      {id: uuid(), title: 'x'},
    ]},
    {id: uuid(), items: [
      {id: uuid(), title: 'o'},
      {id: uuid(), title: 'x'},
      {id: uuid(), title: 'o'},
    ]},
  ];

  const snapshot = renderer.create(<Box data={data} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});

test('Box: check last click', () => {
  const data = [
    {id: uuid(), items: [
      {id: uuid(), title: 'o'},
      {id: uuid(), title: 'x'},
      {id: uuid(), title: 'o'},
    ]},
    {id: uuid(), items: [
      {id: uuid(), title: 'x'},
      {id: uuid(), title: 'o'},
      {id: uuid(), title: 'x'},
    ]},
    {id: uuid(), items: [
      {id: uuid(), title: 'o'},
      {id: uuid(), title: 'x'},
      {id: uuid(), title: 'o'},
    ]},
  ];
  

  const box = shallow(<Box data={data} />).instance();
  box.cellClickHandler('o')();  

  expect(box.state.lastClick).toEqual('o');
});