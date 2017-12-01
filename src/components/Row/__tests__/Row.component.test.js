import React from 'react'
import renderer from 'react-test-renderer';
import Row from '../Row.component';
test ('Row: snapshot test',()=>{
    const  snapshot = renderer.create(<Row/>).toJSON();
    expect(snapshot).toMatchSnapshot();
})
