import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const Cell = ({cellClickHandler, data}) => {
  let btnType = '';
  if (data.title.toUpperCase() === 'O') btnType = 'btn-o';
  if (data.title.toUpperCase() === 'X') btnType = 'btn-x';

  return <div onClick={cellClickHandler(data)} className={`btn ${btnType}`}>{data.title.toUpperCase()}</div>;
};

Cell.propTypes = {
  data: PropTypes.object,
  cellClickHandler: PropTypes.func.isRequired
};
Cell.defaultProps = {
  data: {title: '',id: ''},
  cellClickHandler: noop
};

export default Cell;
