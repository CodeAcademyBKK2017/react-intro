import React from 'react'
import renderer from 'react-test-renderer';
import Box from '../Box.component';
test ('Box: snapshot test',()=>{
    const bData = [['O','X','O'],['X','O','O'],['X','X','O']]
    const  snapshot = renderer.create(<Box boxData={bData}/>).toJSON();
    expect(snapshot).toMatchSnapshot();
})
