import React from 'react';
class Hello extends React.Component{
    render(){
        const a = this.props.name;
        console.log(a);
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
            // <div style={row}>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            // </div>
            // <div style={row}>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            // </div>
            // <div style={row}>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            // </div>
            // <div style={row}>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            //     <div style={cel}>
            //         {this.props.name}
            //     </div>
            // </div>
            <div style={cel}>{this.props.name}</div>
        ); 
    }
}
export default Hello;