import React from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell.component';
import './Row.style.css';

class Row extends React.Component {

  getCell = (cellData, cellIndex) => <Cell key={cellIndex} rowIndex={this.props.rowIndex} cellIndex={cellIndex} cellData={cellData} color="blue" cellClickHandler={this.props.cellClickHandler} />;

  render () {
    const {rowIndex, rowData, cellClickHandler} = this.props;
    const cellLists = rowData.map(this.getCell);
    return (
      <div className="cell-container">
        {cellLists}
      </div>
    );
  }
}

Row.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  rowData: PropTypes.array.isRequired,
  cellClickHandler: PropTypes.func.isRequired
};

Row.defaultProps = {
  rowIndex: 0,
  rowData: [],
  cellClickHandler: noop
};

export default Row;
