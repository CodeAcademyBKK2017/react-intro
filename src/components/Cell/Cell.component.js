import './Cell.style.css';
import PropTypes from 'prop-types';
import React from 'react';
import noop from 'lodash/noop';


const Cell = ({value, cellclickHandler}) => 
  <div className='Cell' onClick={cellclickHandler(value)}>{value.cell_state}</div>;



Cell.propTypes = {
  'cellclickHandler': PropTypes.func.isRequired,
  'value': PropTypes.object.isRequired
};

Cell.defaultProps = {
  'cellclickHandler': noop,
  'value': ''
};

export default Cell;
