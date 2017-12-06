import React from 'react';
import Cell from '../Cell/Cell.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const Row = (props) => {
  return <div>
    <Cell text={props.cellData[0]} clickHandler={props.clickHandler}/>
    <Cell text={props.cellData[1]} clickHandler={props.clickHandler}/>
    <Cell text={props.cellData[2]} clickHandler={props.clickHandler}/>
  </div>
};

Row.propTypes = {
  text : PropTypes.string.isRequired,
  clickHandler : PropTypes.func.isRequired
};

Row.defaultProps = {
  text: '',
  clickHandler: noop
}

export default Row
