import React from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell.component';

class Row extends React.Component {

  getCell = (cellData, index) => <Cell key={cellData.cellID} rowID={this.props.rowID} cellID={index} cellData={cellData.cellData} color="blue" cellClickHandler={this.props.cellClickHandler} />;

  render () {
    const {rowID, rowData, cellClickHandler} = this.props;
    // const cellLists = rowData.map((cellData, index) => <Cell key={cellData[0]} cellData={cellData[1]} color="blue" cellClickHandler={cellClickHandler} />);
    const cellLists = rowData.map(this.getCell);
    return (
      <div>
        {cellLists}
      </div>
    );
  }
}

Row.propTypes = {
  rowID: PropTypes.string.isRequired,
  rowData: PropTypes.array.isRequired,
  cellClickHandler: PropTypes.func.isRequired
};

Row.defaultProps = {
  rowID: '',
  rowData: [],
  cellClickHandler: noop
};

export default Row;
