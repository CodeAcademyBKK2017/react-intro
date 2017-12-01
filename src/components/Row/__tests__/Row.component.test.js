import React from 'react';
import Row from '../Row.component';
import renderer from 'react-test-renderer';


test('Row Snapshot Test',()=>{
    const mock = ['O','X','O'];
    const tree = renderer.create(<Row cellData={mock}/>);
    expect(tree).toMatchSnapshot();
})