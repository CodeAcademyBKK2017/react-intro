import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';

test('Row:Snapshot', () => {
  const tree = renderer
    .create(<div style={{textAlign:'center'}}>
                <Row />
                <Row />
                <Row />
            </div>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});