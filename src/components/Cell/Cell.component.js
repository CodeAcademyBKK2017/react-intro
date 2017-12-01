import React from 'react';
class Hello extends React.Component{
    cellclickHandler(){
        console.log('Clicked');
    }
    render(){
        const cel = {
            margin:'1px',
            backgroundColor: '#2c98f0',
            display: 'inline-block',
            padding: '10px 15px',
            borderradius: '3px',
            color:'#fff',
            cursor: 'pointer',
        }
        const row = {
            
        }
        return(
            <div style={cel} onClick={this.props.clickHandler}>{this.props.name}</div>
        ); 
    }
}
export default Hello;