import React,{Component} from 'react';
import Cell from '../Cell/Cell.component';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

class Row extends Component {
  render () {
    const {cellData,clickHandle} = this.props;

    const cell = cellData.map((rawData,i) => <Cell value={cellData[0]} key={i} color="black" clickHandle={clickHandle}/>);
      
    return (
      <div>
        {cell}
      </div>
    );
  }
}

Row.propTypes = {
  cellData: ProptTypes.array.isRequired,
  clickHandle: ProptTypes.func.isRequired
};

Row.defaultProps = {
  cellData: [],
  clickHandle: noop
};

export default Row;
