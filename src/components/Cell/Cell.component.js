import React from 'react';
class Hello extends React.Component{
    clickHandler=(text)=>{
        console.log('Clicked is',this.props.name);
    }
    render(){
        const cel = {
            margin:'4px',
            borderRadius:'3px',
            backgroundColor: '#2c98f0',
            display: 'inline-block',
            padding: '20px 30px',
            borderradius: '3px',
            color:'#fff',
            cursor: 'pointer',
        }
        const row = {
            
        }
        return(
            <div style={cel} onClick={this.props.clickHandler(this.props.name)}>{this.props.name}</div>
        ); 
    }
}
export default Hello;