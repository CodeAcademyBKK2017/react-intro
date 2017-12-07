import React, {Component} from 'react';
import Row from '../Row/Row.component';

class Box extends Component {
  myProps = this.props;

  getRow = (currentValue) => (
    <Row cellData = {currentValue.value} key = {currentValue.key} cellClickHandle = {this.myProps.cellOnClick}/>
  )

  render () {    
    const rows = this.myProps.valueData.map(this.getRow);
    return (<div>{rows}</div>);
  }
}

export default Box;