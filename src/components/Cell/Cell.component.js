import React, { Component } from 'react';
import './Cell.style.css';
class Cell extends Component{
  
    render(){
        const value = this.props.value.toUpperCase();
        return (
        <div className="Cell" onClick={this.props.cellclickHandler(value)}>
            {value}
        </div>
        )
    }
}
export default  Cell;