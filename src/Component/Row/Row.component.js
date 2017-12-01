import React from 'react';
import Cell from '../Cell/Cell.component'
class Row extends React.Component{
    render(){
        return(
<div style={{textAlign:'center'}}>
   <Cell />
    <Cell />
    <Cell />
</div>
        ) 
    }
}
export default Row;