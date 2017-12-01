import React, { Component } from 'react';
import Row from '../Row/Row.components';

class Box extends Component {

    cellClickHandler = (cellValue) => { // class preproties for es7 feature
        return () => {
            console.log('cell clicked :: ', cellValue);
        }
    }
    // cellClickHandler (cellValue){ //class method
    //     console.log('cell clicked :: ', cellValue);
    // }
    render() {
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

export default Box;
