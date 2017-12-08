import React from 'react';
import Cell from '../Cell/Cell.component';
import PropTypes from 'prop-types';
class Row extends React.Component {

  render () {
    const data = this.props.willData;
    const rows = data.map((rowsData, index) => <Cell name={rowsData} clickHandler={this.props.clickHandler(this.props.keyRow,index)}/>);
    return (
      <div>
        {rows}
      </div>
    );

  }

}


Row.propTypes = {
  willData: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Row;
