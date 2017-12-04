import React from 'react';
import renderer from 'react-test-renderer';
import Row from '../Row.component';
test('Row: snapshot test',() => {
  const cData = ['X','O','X'];
  const xx = () => {
    // console.log('Test');
  };
  const  snapshot = renderer.create(<Row cellData={cData} cellclickHandler={xx}/>).toJSON();
  expect(snapshot).toMatchSnapshot();
});
