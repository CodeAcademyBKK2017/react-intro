import React,{ Component } from 'react';

class Cell extends Component {
  render() {
    return (
      <button style={{
        margin:5,
        border:0,
        borderRadius:5,
        width:70,
        height:70,
        backgroundColor:this.props.color,
        display:'inline',
        color:'white',
        fontSize:'50px',
        boxShadow:' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      }}>{this.props.text}</button>
    );
  }
}

export default Cell
