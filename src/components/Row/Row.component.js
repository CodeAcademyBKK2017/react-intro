
import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell.component';
import noop from 'lodash/noop';

const Row = ({data, cellClickHandler}) => {
  const cells = data.map((cellData) => <Cell title={cellData.title} key={cellData.id} cellClickHandler={this.cellClickHandler} />);
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
