import React, { Component } from 'react';
class Cell extends Component{
    render(){
        return <button className="Cell" type="button">{this.props.text}</button>
    }
}
export default  Cell;