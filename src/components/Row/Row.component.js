
import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell.component';
import noop from 'lodash/noop';

class Row extends React.Component {
  getCell = (cell, i) => <Cell data={cell} cellIndex={i} key={`c${i}`} cellClickHandler={this.props.cellClickHandler({row: this.props.rowIndex, col: i})} />;

  render () {
    const cells = this.props.data.map(this.getCell);
    return <div>{cells}</div>;
  }
}

Row.propTypes = {
  cellClickHandler: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  rowIndex: PropTypes.number.isRequired
};

Row.defaultProps = {
  cellClickHandler: noop,
  data: [],
  rowIndex: 0
};

export default Row;
