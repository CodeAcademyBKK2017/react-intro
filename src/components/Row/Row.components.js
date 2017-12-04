import React, { Component } from 'react';
import Cell from '../Cell/Cell.components';

import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Row extends Component {
  render() {
      const style = {
        marginTop: "44px",
      };
    return (
        <div style={style}>
            <Cell name={ this.props.cellData[0] } cellClickHandler={this.props.cellClickHandler}/> <Cell name={ this.props.cellData[1] } cellClickHandler={this.props.cellClickHandler}/> <Cell name={ this.props.cellData[2] } cellClickHandler={this.props.cellClickHandler}/>
        </div>
    );
  }
}

Row.propTypes = {
  cellClickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
Row.defaultProps = {
  name: '',
  cellClickHandler: noop
};

export default Row;
