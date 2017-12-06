import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/Row.components';
import noop from 'lodash/noop';
class Box extends Component {

    cellClickHandler = (cellValue) =>  // class preproties for es7 feature
      () => {
        console.log('cell clicked :: ', cellValue);
      }
    
    render () {
      const {rowData} = this.props; // key: reserved prop for react
      const rows = rowData.map((obj, index) => <Row cellData={  obj.arr } key={obj.key} cellClickHandler={this.cellClickHandler}/>);
      return (
        <div>
          {rows}
        </div>
      );
    }
}


Box.propTypes = {
  cellClickHandler: PropTypes.func.isRequired,
  cellData: PropTypes.array.isRequired
};
Box.defaultProps = {
  cellData: [],
  cellClickHandler: noop
};

export default Box;

/*
<Row cellData={  this.props.rowData[0] } cellClickHandler={this.cellClickHandler}/> 
          <Row cellData={  this.props.rowData[1] } cellClickHandler={this.cellClickHandler}/> 
          <Row cellData={  this.props.rowData[2] } cellClickHandler={this.cellClickHandler}/>
*/