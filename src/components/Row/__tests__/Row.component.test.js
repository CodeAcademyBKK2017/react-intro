import React from 'react';
import Row from '../Row.component';
import noop from 'lodash/noop';
import renderer from 'react-test-renderer';
test('Row: snapshot test', () => {
  const cData = [
    'X',
    'O',
    'X'
  ];
  const snapshot = renderer.create(<Row cellData={cData}
    cellclickHandler={noop}/>).toJSON();
  expect(snapshot).toMatchSnapshot();
});
