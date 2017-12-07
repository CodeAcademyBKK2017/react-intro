import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';
test('Row: snapshot test', () => {

  const cData = [
    'X',
    'O',
    'X'
  ];
  const xx = () => {
    // Console.log('Test');
  };
  const snapshot = renderer.create(<Row cellData={cData} cellclickHandler={xx}/>).toJSON();
  expect(snapshot).toMatchSnapshot();

});
