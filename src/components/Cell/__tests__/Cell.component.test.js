import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Cell from '../Cell.component';
import uuid from 'uuid';

test('Cell: Snapshot test', () => {
  const cellData = 'o';
  const snapshot = renderer.create(<Cell cellData={cellData} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
