import React from 'react';
import Row from '../Row/Row.component'
class Hello extends React.Component{
    cellclickHandler=(celData)=>{
        return()=>{
            console.log('cellclickHandler',celData);
        }
        
    }
    render(){
    
        return(
            <div>
                <Row class='row' data ={this.props.data[0]} cellclickHandler={this.cellclickHandler}/> 
                <Row class='row' data ={this.props.data[1]} cellclickHandler={this.cellclickHandler}/> 
                <Row class='row' data ={this.props.data[2]} cellclickHandler={this.cellclickHandler}/> 
            </div> 
        )
    }
}
export default Hello;
