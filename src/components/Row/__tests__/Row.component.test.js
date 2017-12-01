import React from 'react'
import renderer from 'react-test-renderer';
import Row from '../Row.component';
test ('Row: snapshot test',()=>{
    const cData = ['X','O','X']
    const  snapshot = renderer.create(<Row cellData={cData}/>).toJSON();
    expect(snapshot).toMatchSnapshot();
})
