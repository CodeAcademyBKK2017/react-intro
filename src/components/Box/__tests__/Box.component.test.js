import React from 'react'
import renderer from 'react-test-renderer';
import Box from '../Box.component';
test ('Box: snapshot test',()=>{
    const  snapshot = renderer.create(<Box/>).toJSON();
    expect(snapshot).toMatchSnapshot();
})
