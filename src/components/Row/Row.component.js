import React from 'react';
import Cell from '../Cell/Cell.component';
class Row extends React.Component{
    render(){
        const data = this.props.willData;
        console.log(data);
        const rows = data.map((rowsData,i)=>{
            return <Cell name={rowsData} key={i} clickHandler={this.props.clickHandler}/>
        });
        return(
            <div>
                {rows}
            </div>
        );
    }
}
export default Row;