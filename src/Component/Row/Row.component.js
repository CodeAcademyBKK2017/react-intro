import React from 'react'; 
import Cell from '../Cell/Cell.component'
class Row extends React.Component{
    render(){
        return(
<div style={{textAlign:'center'}}>
    <Cell willData = {this.props.data[0]} cellclickHandler={this.props.cellclickHandler}/>
    <Cell willData = {this.props.data[1]} cellclickHandler={this.props.cellclickHandler}/>
    <Cell willData = {this.props.data[2]} cellclickHandler={this.props.cellclickHandler}/>
</div>
        ) 
    }
}
export default Row;