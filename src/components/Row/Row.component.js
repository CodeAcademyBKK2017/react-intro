import React,{ Component } from 'react';
import Cell from '../Cell/Cell.component';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

class Row extends Component {
  render() {
      const {cellData,clickHandle} = this.props;
      
    return (
        <div>
        <Cell value={cellData[0]} color="black" clickHandle={clickHandle}/>
        <Cell value={cellData[1]} color="black" clickHandle={clickHandle}/>
        <Cell value={cellData[2]} color="black" clickHandle={clickHandle}/>
        </div>
    );
  }
}

Row.proptTypes = {
  cellData: ProptTypes.array.isRequired,
  clickHandle: ProptTypes.func.isRequired
};

Row.defaultProps = {
  cellData: [],
  clickHandle: noop
};

export default Row
