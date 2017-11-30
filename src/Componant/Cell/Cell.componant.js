import React,{ Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <div style={{
        width:'80px',
        height: '80px',
        margin: '3px',
        border:'0',
        borderRadius:'2px',
        display : 'inline-block',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor:this.props.color,
        color:'white',
        boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}><h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default Cell
