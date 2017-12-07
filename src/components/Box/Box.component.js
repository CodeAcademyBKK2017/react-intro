
import React, {Component} from 'react';
import Row from '../Row/Row.component';
import PropTypes from 'prop-types';

class Box extends Component {
  state = {
    lastClick: null
  }

  cellClickHandler = (title) => () => {
    this.setState({lastClick: title});
  }

  render () {
    const {data} = this.props;
    const rows = data.map((rowData) => <Row data={rowData.items} key={rowData.id} cellClickHandler={this.cellClickHandler} />);
    return (<div>{rows}</div>);
  }
}

Box.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};
Box.defaultProps = { 
  data: [{id: 'key-1', items: [{id: 'key-2', title: 'o'}]}],
};

export default Box;
