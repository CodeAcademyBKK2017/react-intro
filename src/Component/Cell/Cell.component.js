import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import './Cell.component.css';

const Cell = (props) => (
  <div className="Cell" onClick = {props.cellClickHandle(props.text)}>
    <h1>{props.text}</h1>
  </div>
);

Cell.propTypes = {
  text: PropTypes.string.isRequired,
  cellClickHandle: PropTypes.func.isRequired
};

Cell.defaultProps = {
  text: '',
  cellClickHandle: noop
};

export default Cell;
