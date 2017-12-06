import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box.component';
test('Box: snapshot test',() => {
  const bData = [
    {items: ['O','X','O'],id: '111'},
    {items: ['X','O','O'],id: '222'},
    {items: ['X','X','O'],id: '333'}
  ];
  const  snapshot = renderer.create(<Box boxData={bData}/>).toJSON();
  expect(snapshot).toMatchSnapshot();
});
