
import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell.component';
import noop from 'lodash/noop';

const Row = ({data, cellClickHandler}) => {
  const cells = data.map((cellData) => <Cell data={cellData} key={cellData.id} cellClickHandler={cellClickHandler} />);
  return (<div>{cells}</div>);
};

Row.propTypes = {
  cellClickHandler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

Row.defaultProps = {
  cellClickHandler: noop
};

export default Row;
