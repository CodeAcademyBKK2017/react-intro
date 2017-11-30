import React,{ Component } from 'react';

class Button extends Component {
  render() {
    return (
      <button style={{
        width:'65px',
        height: '60px',
        margin: '1px',
        border:'0',
        borderRadius:'2px',
        backgroundColor:this.props.color,
        color:'white',
      }}>{this.props.text}</button>
    );
  }
}

export default Button


// boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
