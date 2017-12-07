import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/Row.component';

class Box extends React.Component {
  cellClickHandler = (cellData) => () => {
    console.log('cell clicked', cellData);
    return cellData;
  }

  getRow = (rowData) => <Row key={rowData[0]} rowData={rowData[1]} cellClickHandler={this.cellClickHandler} />
  
  render () {
    const {boxData} = this.props;
    // const rowLists = boxData.map((rowData, index) => <Row key={rowData[0]} rowData={rowData[1]} cellClickHandler={this.cellClickHandler} />);
    const rowLists = boxData.map(this.getRow);
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
