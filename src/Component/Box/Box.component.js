import React from 'react';
import Row from '../Row/Row.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

const Box = (props) => (
    <div>
      <Row cellData = {props.valueData[0]} clickHandler = {props.clickHandler}/>
      <Row cellData = {props.valueData[1]} clickHandler = {props.clickHandler}/>
      <Row cellData = {props.valueData[2]} clickHandler = {props.clickHandler}/>
    </div>
);

Box.propTypes = {
  cellData : PropTypes.string.isRequired,
  clickHandler : PropTypes.func.isRequired
};

Box.defaultProps = {
  cellData: '',
  clickHandler: noop
}

export default Box
