import React, { Component } from 'react';
import './Cell.style.css';
class Cell extends Component{
    render(){
        return (
        <div className="Cell">
            {this.props.value}
        </div>
        )
    }
}
export default  Cell;