import React from 'react';
import Cell from '../Cell/Cell.component';
class Row extends React.Component{
    render(){
        return(
            <div>
                <Cell name={this.props.willData[0]} clickHandler={this.props.clickHandler}/>
                <Cell name={this.props.willData[1]} clickHandler={this.props.clickHandler}/>
                <Cell name={this.props.willData[2]} clickHandler={this.props.clickHandler}/>
            </div>
        );
    }
}
export default Row;