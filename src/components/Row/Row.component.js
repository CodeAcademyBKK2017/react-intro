import React from 'react';
import Cell from '../Cell/Cell.component';
class Row extends React.Component{
    render(){
        return(
            <div>
                <Cell name={this.props.willData[0]}/>
                <Cell name={this.props.willData[1]}/>
                <Cell name={this.props.willData[2]}/>
            </div>
        );
    }
}
export default Row;