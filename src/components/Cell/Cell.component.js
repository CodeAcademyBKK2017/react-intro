import React,{ Component } from 'react';
import './Cell.style.css';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

class Cell extends Component {

  render() {
    const {value} = this.props
    const color = value === 'O'?'blue':'red';
    return (
      <div className="Cell" style={{backgroundColor:color}} onClick={this.props.clickHandle(value)}>{value}</div>
    );
  } 
}

Cell.proptTypes = {
  value: ProptTypes.string.isRequired,
  clickHandle: ProptTypes.func.isRequired
};

Cell.defaultProps = {
  value: '',
  clickHandle: noop
};

export default Cell
