import React from 'react';
class Cell extends React.Component{
    cellclickHandler(){
        this.props.cellclickHandler(this.props.willData)
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


            <div style={cel}  onClick = {this.props.cellclickHandler(this.props.willData)}>{this.props.willData} </div>

        )
    }
}
export default Cell;