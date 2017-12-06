import React from 'react';

class Button extends React.Component {
  render() {
    const style = {
        color: 'white',
        backgroundColor: '#2C98F0',
        fontWeight: 'bold',
        border: 'none',
        padding: 10,
        borderRadius: 3,
        boxShadow: '0px 3px 3px 1px #CCCCCC'
    };
    return (
        <button style={style}>
            {this.props.text}
        </button>
    );
  }
}

export default Button;
