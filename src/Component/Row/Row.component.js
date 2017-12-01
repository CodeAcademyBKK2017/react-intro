import React from 'react'; 
import Cell from '../Cell/Cell.component'
class Row extends React.Component{
    render(){
        return(
<div style={{textAlign:'center'}}>
    <Cell willData = {this.props.data[0]}/>
    <Cell willData = {this.props.data[1]} />
    <Cell willData = {this.props.data[2]} />
</div>
        ) 
    }
}
export default Row;