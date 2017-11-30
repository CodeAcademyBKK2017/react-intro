import React, { Component } from 'react';
class Hello extends Component{
    render(){
        console.log(this.props);
        return <div> Hello {this.props.name} World </div>
    }
}
export default  Hello;