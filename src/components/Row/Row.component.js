import React,{Component} from 'react';
import Cell from '../Cell/Cell.component';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

class Row extends Component {
  render () {
    const {cellData,clickHandle,rowID} = this.props;
  
    const cell = cellData.map((rawData,i) => <Cell value={cellData[i]} key={i} cellID={i} rowKey={rowID} color="black" clickHandle={clickHandle}/>);
 
    return (
      <div>
        {cell}
      </div>
    );
  }
}

Row.propTypes = {
  cellData: ProptTypes.array.isRequired,
  clickHandle: ProptTypes.func.isRequired,
  rowID: ProptTypes.string.isRequired
};

Row.defaultProps = {
  cellData: [],
  clickHandle: noop,
  rowID: ''
};

export default Row;
