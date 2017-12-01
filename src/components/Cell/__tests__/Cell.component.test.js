import React from 'react'
import renderer from 'react-test-renderer';
import Cell from '../Cell.component';
test ('Cell: snapshot test',()=>{
    const cell = 'X';
    const  snapshot = renderer.create(<Cell value={cell}/>).toJSON();
    expect(snapshot).toMatchSnapshot();
})
