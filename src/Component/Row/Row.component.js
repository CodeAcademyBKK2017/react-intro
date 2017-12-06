import React from 'react'; 
import Cell from '../Cell/Cell.component'
class Row extends React.Component{
    render(){
        const data = this.props.data;
        const willData = data.map((row,i)=>{
            return <Cell willData = {row} key = {i} cellclickHandler={this.props.cellclickHandler}/>
        })
        return(
<div style={{textAlign:'center'}}>
            {willData}
</div>
        ) 
    }
}
export default Row;