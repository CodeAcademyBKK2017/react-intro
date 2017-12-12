import React from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import './Cell.style.css';

// class Cell extends React.Component {
//   render () {
//     const {cellData, color, cellClickHandler} = this.props;
//     return (
//       <div className={`Cell-button Cell-button__${color}`} onClick={cellClickHandler(cellData)}>
//         {this.props.cellData}
//       </div>
//     );
//   }
// }

const Cell = ({rowIndex, cellIndex, cellData, color, cellClickHandler}) => (<div className={`Cell-button Cell-button__${color} ${cellData ? 'disabled-cell' : ''}`} onClick={cellClickHandler({rowIndex, cellIndex, cellData})}>
  {cellData}
</div>);

Cell.propTypes = {
  rowIndex: PropTypes.number.isRequired,
  cellIndex: PropTypes.number.isRequired,
  cellData: PropTypes.oneOf(['O', 'X', '']).isRequired,
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
  cellClickHandler: PropTypes.func.isRequired
};

Cell.defaultProps = {
  rowIndex: 0,
  cellIndex: 0,
  cellData: '',
  color: 'blue',
  cellClickHandler: noop
};

export default Cell;
