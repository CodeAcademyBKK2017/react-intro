
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Box extends Component {
    cellClickHandler = (title) => () => {
    //   console.log('Cell click: ', title);
    }

    render () {
      const {data} = this.props;
      const rows = data.map((rowData) => <Row data={rowData.items} key={rowData.id} cellClickHandler={this.cellClickHandler} />);
      return (<div>{rows}</div>);
    }
}

Box.propTypes = {
  cellClickHandler: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object)
};
Box.defaultProps = { 
  data: [{id: 'key-1', items: [{id: 'key-2', title: 'o'}]}],
  cellClickHandler: noop
};

export default Box;
