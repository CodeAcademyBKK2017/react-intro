import React from 'react';
import './Cell.style.css';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

  
const Cell = (props) => {
  const color = props.value === 'O' ? 'blue' : 'red';    
  return (
    <div  className={`Cell ${props.value ? 'disabled-cell' : '' }`} style={{backgroundColor: color}} onClick={props.clickHandle(props.value,props.rowKey,props.cellID)}>{props.value}</div>
  );
};

    
Cell.propTypes = {
  value: ProptTypes.string.isRequired,
  clickHandle: ProptTypes.func.isRequired,
  rowKey: ProptTypes.string.isRequired,
  cellID: ProptTypes.number.isRequired
};

Cell.defaultProps = {
  value: '',
  clickHandle: noop,
  rowKey: '',
  cellID: 0
};

export default Cell;
