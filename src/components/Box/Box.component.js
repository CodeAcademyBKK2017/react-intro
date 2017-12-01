import React,{ Component } from 'react';
import Row from '../Row/Row.component'

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

export default Box
