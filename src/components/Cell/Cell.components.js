// import React, {Component} from 'react';
import React from 'react';
import './Cell.css';

import PropTypes from 'prop-types';
import noop from 'lodash/noop';

// class Cell extends Component {
//   render () {
//     return (
//       <div className="cell-box" onClick={this.props.cellClickHandler(this.props.name)}>
//         { this.props.name }
//       </div>
//     );
//   }
// }

const Cell = ({name, cellClickHandler, key}) => (<div className="cell-box" onClick={cellClickHandler(name)}>
  { name }
</div>);

Cell.propTypes = {
  onClick: PropTypes.func.isRequired
};
Cell.defaultProps = {
  onClick: noop
};

export default Cell;
