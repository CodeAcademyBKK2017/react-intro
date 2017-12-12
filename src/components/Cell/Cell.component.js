import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const Cell = ({cellClickHandler, data}) => {
  let btnType = '';
  if (data.toUpperCase() === 'O') btnType = 'btn-o';
  if (data.toUpperCase() === 'X') btnType = 'btn-x';

  return <div onClick={cellClickHandler} className={`btn ${btnType}`}>{data.toUpperCase()}</div>;
};

Cell.propTypes = {
  data: PropTypes.string,
  cellClickHandler: PropTypes.func.isRequired
};
Cell.defaultProps = {
  data: '',
  cellClickHandler: noop
};

export default Cell;
