import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/Row.component';

class Box extends React.Component {
  cellClickHandler = (cellData) => () => {
    console.log('cell clicked', cellData);
  }
  render () {
    const {boxData} = this.props;
    const rowLists = boxData.map((rowData, index) => <Row key={rowData[0]} rowData={rowData[1]} cellClickHandler={this.cellClickHandler} />);
    return (
      <div>
        {rowLists}
      </div>
    );
  }
}

Box.propTypes = {
  boxData: PropTypes.array.isRequired
};
  
Box.defaultProps = {
  boxData: []
};

export default Box;
