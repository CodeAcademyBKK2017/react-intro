import React from 'react'
import renderer from 'react-test-renderer';
import Cell from '../Cell.component';
test ('Cell: snapshot test',()=>{
    const  snapshot = renderer.create(<Cell/>)
    expect(snapshot).toMatchSnapshot();
})
