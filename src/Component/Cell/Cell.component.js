import React from 'react';
class Cell extends React.Component{
    cellclickHandler(){

    }
    render(){
        const cel = {
            background: 'rgb(6, 194, 243)',
            fontSize:'20px',
            color: '#fff',
            padding:'25px',
            marginLeft: '2px',
            height:'20px',
            display: 'inline-block',
            border:'1px solid #fff',
        }
        return(


            <div style={cel}  onClick = {this.props.cellclickHandler}>{this.props.willData} </div>

        )
    }
}
export default Cell;