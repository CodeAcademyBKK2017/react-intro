import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import './Cell.component.css';

const Cell = (props) => (
  <div className="Cell" onClick = {props.cellClickHandle(props.row,props.cell)}>
    <div className="Cell2"><h1>{props.text}</h1></div>
  </div>
);

Cell.propTypes = {
  text: PropTypes.string.isRequired,
  cellClickHandle: PropTypes.func.isRequired,
  row: PropTypes.number.isRequired,
  cell: PropTypes.number
};

Cell.defaultProps = {
  text: '',
  cellClickHandle: noop,
  row: 0,
  cell: 0
};

export default Cell;
