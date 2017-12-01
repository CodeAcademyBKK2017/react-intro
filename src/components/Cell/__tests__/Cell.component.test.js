import React from 'react'
import renderer from 'react-test-renderer';
import Cell from '../Cell.component';
test ('Cell: snapshot test',()=>{
    const cell = 'X';
    const xx = ()=>{
        console.log('Test')
    }
    const  snapshot = renderer.create(<Cell value={cell} cellclickHandler={xx}/>).toJSON();
    expect(snapshot).toMatchSnapshot();
})
