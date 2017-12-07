import React, {Component} from 'react';
import Row from '../Row/Row.component';
import ProptTypes from 'prop-types';
import noop from 'lodash/noop';

class Box extends Component {
  mapFunction = (rawData) => <Row cellData={rawData.items} key={rawData.rowkeys} clickHandle={this.props.callHandle}/>;
  
  render () {
    const {Data} = this.props;  
    const row = Data.map(this.mapFunction);
    return (<div>
      {row}
    </div>);
  }
}

Box.propTypes = {
  Data: ProptTypes.array.isRequired,
  callHandle: ProptTypes.func.isRequired
};

Box.defaultProps = {
  Data: [],
  callHandle: noop
};

export default Box;
