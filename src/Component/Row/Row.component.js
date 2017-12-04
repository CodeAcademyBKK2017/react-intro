import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Row extends Component {

  render() {
    const my = this.props;
    return (
      <div>
        <Cell text={my.cellData[0]} color='#2196F3' clickHandler={my.clickHandler}/>
        <Cell text={my.cellData[1]} color='#2196F3' clickHandler={my.clickHandler}/>
        <Cell text={my.cellData[2]} color='#2196F3' clickHandler={my.clickHandler}/>
      </div>
    );
  }
}

Row.propTypes = {
  text : PropTypes.string.isRequired,
  clickHandler : PropTypes.func.isRequired
};

Row.defaultProps = {
  text: '',
  clickHandler: noop
}

export default Row
