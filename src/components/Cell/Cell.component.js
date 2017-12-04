import React, {Component} from 'react';
import './Cell.style.css';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
class Cell extends Component {
  
  render () {
    const value = this.props.value.toUpperCase();
    return (
      <div className="Cell" onClick={this.props.cellclickHandler(value)}>
        {value}
      </div>
    );
  }
}
Cell.propTypes = {
  cellclickHandler: PropTypes.func.isRequired,
  value: PropTypes.oneOf(['X','O']).isRequired
};
Cell.defaultProps = {
  cellclickHandler: noop,
  value: ''
};
export default  Cell;