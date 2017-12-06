import React from 'react';
import Row from '../Row/Row.component';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

// class Box extends Component {

//   render() {
//     const {Data,callHandle} = this.props
//     return (
//         <div>
//         <Row cellData={Data[0]} clickHandle = {callHandle}/>
//         <Row cellData={Data[1]} clickHandle = {callHandle}/>
//         <Row cellData={Data[2]} clickHandle = {callHandle}/>
//         </div>
//     );
//   }
// }

const Box = ({Data,callHandle}) => {

  const row = Data.map((rawData,i)=>{
    console.log(rawData)
    return <Row cellData={rawData.items} key={rawData.rowkeys} clickHandle={callHandle}/>
  })
  return (<div>
          {row}
    </div>);
}

Box.proptTypes = {
  Data: ProptTypes.array.isRequired,
  callHandle: ProptTypes.func.isRequired
};

Box.defaultProps = {
  Data: [],
  callHandle: noop
};

export default Box
