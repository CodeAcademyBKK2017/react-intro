import React from 'react';
import PropTypes from 'prop-types';
import Row from '../Row/Row.component';

class Box extends React.Component {
  // cellClickHandler = (cellData) => () => {
  //   console.log('cell clicked', cellData);
  // }
  // render () {
  //   const {boxData} = this.props;
  //   const rowLists = boxData.map((rowData, index) => <Row key={index} rowData={rowData} cellClickHandler={this.cellClickHandler} />);
  //   return (
  //     <div>
  //       {rowLists}
  //     </div>
  //   );
  // }
  constructor () {
    super();
    this.cellClickHandler = this.cellClickHandler.bind(this);
  }
  cellClickHandler (cellData) {
    return () => console.log('cell clicked', cellData);
  }
  render () {
    const {boxData} = this.props;
    const rowLists = boxData.map((rowData, index) => <Row key={index} rowData={rowData} cellClickHandler={this.cellClickHandler} />);
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
