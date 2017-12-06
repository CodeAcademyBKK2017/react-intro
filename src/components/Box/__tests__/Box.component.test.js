import React from 'react';
import renderer from 'react-test-renderer';
import Box from '../Box.component';
import uuid from 'uuid';

test('Box: Snapshot test', () => {
  const boxData = [
    [uuid().toString(), [[uuid().toString(), 'o'], [uuid().toString(), 'x'], [uuid().toString(), 'o']]],
    [uuid().toString(), [[uuid().toString(), 'o'], [uuid().toString(), 'x'], [uuid().toString(), 'x']]],
    [uuid().toString(), [[uuid().toString(), 'x'], [uuid().toString(), 'x'], [uuid().toString(), 'o']]],
    [uuid().toString(), [[uuid().toString(), 'x'], [uuid().toString(), 'x'], [uuid().toString(), 'x']]],
    [uuid().toString(), [[uuid().toString(), 'x'], [uuid().toString(), 'o'], [uuid().toString(), 'x'], [uuid().toString(), 'o'], [uuid().toString(), 'o']]]
  ];
  const snapshot = renderer.create(<Box boxData={boxData} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
