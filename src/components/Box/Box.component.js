import React,{Component} from 'react';
import Row from '../Row/Row.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
class Box extends Component {
  cellclickHandler (cellValue) {
    return () => {
      // console.log('This Cell was click and value is',cellValue);
    };
  }
  render () {
    return ( 
      <div>
        <Row cellData={this.props.boxData[0]} cellclickHandler={this.cellclickHandler}/>
        <Row cellData={this.props.boxData[1]} cellclickHandler={this.cellclickHandler}/>
        <Row cellData={this.props.boxData[2]} cellclickHandler={this.cellclickHandler}/>
      </div>
    );
  }
}
Row.propTypes = {
  boxData: PropTypes.array.isRequired
};
Row.defaultProps = {
  boxData: []
};
export default Box;