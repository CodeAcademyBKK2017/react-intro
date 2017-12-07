import React from 'react';
import Row from '../Row/Row.component';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

const Box = ({Data,callHandle}) => {

  const row = Data.map((rawData,i) => {
    console.log(rawData);
    return <Row cellData={rawData.items} key={rawData.rowkeys} clickHandle={callHandle}/>;
  });
  return (<div>
    {row}
  </div>);
};

Box.propTypes = {
  Data: ProptTypes.array.isRequired,
  callHandle: ProptTypes.func.isRequired
};

Box.defaultProps = {
  Data: [],
  callHandle: noop
};

export default Box;
