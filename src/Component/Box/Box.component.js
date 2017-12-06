import React from 'react';
import Row from '../Row/Row.component';

const Box = (props) => {
  const rows = props.valueData.map((currentValue, index, array) => {
    console.log('Box : ',currentValue);
    return <Row cellData = {currentValue.value} key = {currentValue.key} clickHandler = {props.clickHandler}/>
  });
  
  return (<div>{rows}</div>);
}

export default Box
