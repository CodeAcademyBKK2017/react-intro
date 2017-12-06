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

const Cell = ({cellData, color, cellClickHandler}) => (<div className={`Cell-button Cell-button__${color}`} onClick={cellClickHandler(cellData)}>
  {cellData}
</div>);

Cell.propTypes = {
  cellData: PropTypes.oneOf(['o', 'x']).isRequired,
  color: PropTypes.oneOf(['blue', 'red']).isRequired,
  cellClickHandler: PropTypes.func.isRequired
};

Cell.defaultProps = {
  cellData: 'o',
  color: 'blue',
  cellClickHandler: noop
};

export default Cell;
