
import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell.component';
import noop from 'lodash/noop';

const Row = ({data, cellClickHandler}) => (
  <div>
    {data.map((rowData) => (<Cell  cellClickHandler={cellClickHandler} title={rowData}/>))}
  </div>
);

Row.propTypes = {
  cellClickHandler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

Row.defaultProps = {
  cellClickHandler: noop
};

export default Row;
