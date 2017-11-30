import React,{ Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <div style={{
        margin:5,
        border:0,
        borderRadius:5,
        width:70,
        height:70,
        backgroundColor:this.props.color,
        display:'inline-block',
        color:'white',
        fontSize:'50px',
        boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}>{this.props.text}</div>
    );
  }
}

export default Cell
