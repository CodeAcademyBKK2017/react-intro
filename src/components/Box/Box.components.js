import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/Row.components';
import noop from 'lodash/noop';
class Box extends Component {

  constructor () {
    super();
    this.cellClickHandler = this.cellClickHandler.bind(this);
  }

  // cellClickHandler = (cellValue) =>  // class preproties for es7 feature
  //   () => {
  //     console.log('cell clicked :: ', cellValue);
  //   }

  // class method : ES6
  cellClickHandler (cellValue) {
    return () => {
      console.log('cell clicked :: ', cellValue);
      
    };
  }
    
  // cellClickHandler (cellValue){ //class method
  //     console.log('cell clicked :: ', cellValue);
  // }
  render () {
    // this.props.rowData
    return (
      <div>
        <Row cellData={  this.props.rowData[0] } cellClickHandler={this.cellClickHandler}/> 
        <Row cellData={  this.props.rowData[1] } cellClickHandler={this.cellClickHandler}/> 
        <Row cellData={  this.props.rowData[2] } cellClickHandler={this.cellClickHandler}/>
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
