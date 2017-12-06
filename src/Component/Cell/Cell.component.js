import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import './Cell.component.css';

const Cell = (props) => (
  <div
    className="Cell" onClick = {props.clickHandler(props.text)}><h1>{props.text}</h1>
  </div>
);

Cell.propTypes = {
  text : PropTypes.string.isRequired,
  clickHandler : PropTypes.func.isRequired
};

Cell.defaultProps = {
  text: '',
  clickHandler: noop
}

export default Cell
