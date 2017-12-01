import React from 'react';
import Cell from '../Cell/Cell.component';
class Row extends React.Component{
    render(){
        return(
            <div>
                <Cell name="Hello"/>
            </div>
        );
    }
}
export default Row;