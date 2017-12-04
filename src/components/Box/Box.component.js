import React,{ Component } from 'react';
import Row from '../Row/Row.component';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

class Box extends Component {

  render() {
    const {Data,callHandle} = this.props
    return (
        <div>
        <Row cellData={Data[0]} clickHandle = {callHandle}/>
        <Row cellData={Data[1]} clickHandle = {callHandle}/>
        <Row cellData={Data[2]} clickHandle = {callHandle}/>
        </div>
    );
  }
}

Box.proptTypes = {
  Data: ProptTypes.array.isRequired,
  callHandle: ProptTypes.func.isRequired
};

Box.defaultProps = {
  Data: [],
  callHandle: noop
};

export default Box
