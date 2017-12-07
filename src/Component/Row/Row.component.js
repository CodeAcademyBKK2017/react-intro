import React from 'react';
import Cell from '../Cell/Cell.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const Row = (props) => <div>
  <Cell text={props.cellData[0]} cellClickHandle = {props.cellClickHandle}/>
  <Cell text={props.cellData[1]} cellClickHandle = {props.cellClickHandle}/>
  <Cell text={props.cellData[2]} cellClickHandle = {props.cellClickHandle}/>
</div>;

Row.propTypes = {
  cellData: PropTypes.array.isRequired,
  cellClickHandle: PropTypes.func.isRequired
};

Row.defaultProps = {
  cellData: [],
  cellClickHandle: noop
};

export default Row;
