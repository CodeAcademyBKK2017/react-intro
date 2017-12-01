import React from 'react';
import Row from '../Row/Row.component'
class Hello extends React.Component{
    render(){

        return(
            <div>
                <Row class='row' data ={this.props.data[0]}/> 
                <Row class='row' data ={this.props.data[1]}/> 
                <Row class='row' data ={this.props.data[2]}/> 
            </div> 
        )
    }
}
export default Hello;
