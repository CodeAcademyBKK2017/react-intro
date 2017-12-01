import React, { Component } from 'react';
import './Cell.style.css';
class Cell extends Component{
    render(){
        return (
        <div className="Cell" onClick={this.props.cellclickHandler}>
            {this.props.value}
        </div>
        )
    }
}
export default  Cell;