import React, {Component} from 'react';
import Row from '../Row/Row.component';

class Box extends Component {

  getRow = (currentValue, index, array) => (
    <Row cellData = {currentValue.value} key = {index} row = {index} cellClickHandle = {this.props.cellOnClick}/>
  )

  render () {    
    const rows = this.props.valueData.map(this.getRow);
    return (<div>{rows}</div>);
  }
}

export default Box;