import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Cell from '../Cell.component';
import uuid from 'uuid';

it('Cell: Snapshot test', () => {
  const cellData = 'O';
  const snapshot = renderer.create(<Cell key={0} cellIndex={0} cellData={cellData} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
