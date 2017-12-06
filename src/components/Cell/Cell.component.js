import React from 'react';
import './Cell.style.css';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

  
const Cell = (props) => {
  const color = props.value === 'O'?'blue':'red';    
  return (
    <div className="Cell" style={{backgroundColor:color}} onClick={props.clickHandle(props.value)}>{props.value}</div>
  );
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
