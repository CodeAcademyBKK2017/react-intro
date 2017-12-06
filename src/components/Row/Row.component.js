import React from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import Cell from '../Cell/Cell.component';

// class Row extends React.Component {
//   render () {
//     const {rowData, cellClickHandler} = this.props;
//     const cellLists = rowData.map((cellData, index) => <Cell key={cellData[0]} cellData={cellData[1]} color="blue" cellClickHandler={cellClickHandler} />);
//     return (
//       <div>
//         {cellLists}
//       </div>
//     );
//   }
// }

const Row = ({rowData, cellClickHandler}) => {
  const cellLists = rowData.map((cellData, index) => <Cell key={cellData[0]} cellData={cellData[1]} color="blue" cellClickHandler={cellClickHandler} />);
  return (
    <div>
      {cellLists}
    </div>
  );
};

Row.propTypes = {
  rowData: PropTypes.array.isRequired,
  cellClickHandler: PropTypes.func.isRequired
};

Row.defaultProps = {
  rowData: [],
  cellClickHandler: noop
};

export default Row;
