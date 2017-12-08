import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {

  clickHandler = (text) => {
    console.log('Clicked is', this.props.name);
  }

  render () {
    const cel = {
      'margin': '4px',
      'borderRadius': '3px',
      'backgroundColor': '#2c98f0',
      'display': 'inline-block',
      'padding': '20px 30px',
      'borderradius': '3px',
      'color': '#fff',
      'cursor': 'pointer',
    };
    const fonts = {
      fontWeight: '600',
      fontSize: '25px',
      width: '30px',
      height: '29px',
      overflow: 'hidden'
    };
    return (
      <div style={cel} onClick={this.props.clickHandler}>
        <div style={fonts}>{this.props.name}</div>
      </div>
    );

  }

}

Cell.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Cell;
