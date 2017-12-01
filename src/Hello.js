import React from 'react';
class Hello extends React.Component{
    render(){
        const cel = {
            margin:'1px',
            backgroundColor: '#2c98f0',
            display: 'inline-block',
            padding: '15px 10px',
            borderradius: '3px',
            color:'#fff',
            cursor: 'pointer',
        }
        const row = {
            
        }
        return(
            <div>
                <div style={row}>
                    <div style={cel}>
                        {this.props.name}
                    </div>
                    <div style={cel}>
                        {this.props.name}
                    </div>
                    <div style={cel}>
                        {this.props.name}
                    </div>
                </div>
                <div style={row}>
                    <div style={cel}>
                        {this.props.name}
                    </div>
                    <div style={cel}>
                        {this.props.name}
                    </div>
                    <div style={cel}>
                        {this.props.name}
                    </div>
                </div>
                <div style={row}>
                    <div style={cel}>
                        {this.props.name}
                    </div>
                    <div style={cel}>
                        {this.props.name}
                    </div>
                    <div style={cel}>
                        {this.props.name}
                    </div>
                </div>
            </div>
        );
    }
}
export default Hello;