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
    const {boxData} = this.props;
    console.log(boxData);
    const rows = boxData.map((rowData) => <Row cellData={rowData.items} key={rowData.id} cellclickHandler={this.cellclickHandler}/>);
    return ( 
      <div>
        {rows}
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