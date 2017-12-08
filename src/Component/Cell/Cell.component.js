import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import './Cell.component.css';
const colorX = '#2196F3';
const colorO = '#F44336';
const colorD = '#F5F5F5';
const Cell = (props) => {
  let color;
  if (props.text === 'X') color = colorX;
  else if  (props.text === 'O') color = colorO;
  else color = colorD;
  return (
    <div className="Cell" style={styleCell(color)} onClick={props.cellClickHandle(props.row,props.cell)}>
      <div className="Cell2"><h1>{props.text}</h1></div>
    </div>
  );
};

const styleCell = (color) => ({
  'width': '80px',
  'height': '80px',
  'margin': '3px',
  'border': '0',
  'borderRadius': '2px',
  'display': 'inline-block',
  'textAlign': 'center',
  'justifyContent': 'center',
  'backgroundColor': color,
  'color': 'white',
  'boxShadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
});

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
